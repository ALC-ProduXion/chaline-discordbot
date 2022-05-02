const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'newgif',
    description: 'Ajouter des gifs personnalisés',
    execute(message, args) {
        const { client, botchannels } = require("../../index.js");

        if (message.member.hasPermission("ADMINISTRATOR")) {
            try {
                actualdate = new Date();
                servgifdir = `./gif/servers/${message.guild.id}`;
                try {
                    // first check if directory already exists
                    if (!fs.existsSync(servgifdir)) {
                        fs.mkdirSync(servgifdir);
                        logger.all(`./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                        client.channels.cache.get(botchannels.gifServerLogChannel).send(`**NEW :** ./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                        elgibilitysrv = {
                            elgibility: 1,
                            datedelivering: actualdate
                        }
                        const jsonStringcfg = JSON.stringify(elgibilitysrv);
                        fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                            if (err) {
                                logger.all(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                                client.channels.cache.get(botchannels.gifServerLogChannel).send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                                message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-NEWGIF-CRWREL-1-MAIN\`")
                            } else {
                                logger.all(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                client.channels.cache.get(botchannels.gifServerLogChannel).send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                try {//---------------------------loading previous
                                    eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                    logger.all("Eligibilité chargée")
                                } catch (err) { logger.all("! ERREUR : pas d'Eligibilité chargée"); }
                                setTimeout(function () {
                                    if (!eligibilityread) {
                                        message.reply("Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-NEWGIF-CRREEL-1-MAIN\`")
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            if (!args[0]) {
                                                return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            commandname = args[0].toLowerCase();
                                            if (commandname == "help" || commandname == "?") {
                                                return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            if (!args[1]) {
                                                return message.reply(`Erreur : Vérifiez le nombre d'arguments !
Pour rappel la commande s'écrit sous la forme :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            existngiffile = false;
                                            existpgiffile = false;
                                            existhgiffile = false;
                                            try {//---------------------------loading gif file normal
                                                existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                                                logger.all("Ce fichier Normal exite déjà");
                                            } catch (err) { logger.all("Ce fichier Normal n'existe pas"); }
                                            try {//---------------------------loading gif file plus
                                                existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                                                logger.all("Ce fichier Plus exite déjà");
                                            } catch (err) { logger.all("Ce fichier Plus n'existe pas"); }
                                            try {//---------------------------loading gif file hard
                                                existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                                                logger.all("Ce fichier Hard exite déjà");
                                            } catch (err) { logger.all("Ce fichier Hard n'existe pas"); }
                                            existsgiffile = false;
                                            try {//---------------------------loading gif file server
                                                existsgiffile = fs.readFileSync(path.resolve(`${servgifdir}/${commandname}.js`));
                                                logger.all("Ce fichier Serveur exite déjà");
                                            } catch (err) { logger.all("Ce fichier Serveur n'existe pas"); }
                                            setTimeout(function () {
                                                if (existngiffile != false || existpgiffile != false || existhgiffile != false) {
                                                    message.reply(`La commande ,${commandname} existe déjà nativement dans Chaline !\nPar conséquent la nouvella commande personnalisée sera prioritaire.`);
                                                }
                                                if (existsgiffile != false) {
                                                    return message.reply(`La commande ,${commandname} existe déjà sur votre serveur !`);
                                                }
                                                logger.all("commmande n'existe pas");
                                                var actualdate = new Date();

                                                datevar = actualdate.toISOString();
                                                giflisturl = args
                                                giflisturl.shift();
                                                giflisturljson = JSON.stringify(giflisturl)

                                                fs.appendFile(`${servgifdir}/${commandname}.js`, `module.exports = { //Commande générée par ${message.author.tag}(${message.author.id}) (avec AddGif v1.0 - version newgif)
    name: "${commandname}",
    description: "ajoutée par ${message.author.tag}",
    execute(message) {
    const giflist = ${giflisturljson}
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le ${datevar} depuis le channel ${message.channel.name}(${message.channel.id}) sur le serveur ${message.guild.name}(${message.guild.id})`, function (err) {
                                                    if (err) throw err;
                                                    logger.all('File is created successfully.');
                                                });
                                                setTimeout(function () {
                                                    triggerload.reloadgifserver(message.guild.id);
                                                    logger.all(`Nouvella commande générée dans ${servgifdir}/${commandname}.js`);
                                                    client.channels.cache.get(botchannels.gifServerLogChannel).send(`**-🆕️-** Nouvella commande générée dans ${servgifdir}/${commandname}.js par ${message.author.tag} pour ${message.guild.name}(${message.guild.id}), gifs :\n\`${giflisturl}\``);
                                                    message.reply(`Nouvella commande ,${commandname} ajoutée !`);
                                                }, 1000);
                                            }, 1000);
                                        } else { message.reply(`\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\``) }
                                    }
                                }, 500);
                            }
                        })
                    } else {
                        logger.all("(folder already exists) ;newgif use on " + message.guild.name);
                        fs.stat(`${servgifdir}/settings${message.guild.id}.json`, function (err, stat) {
                            if (err == null) {
                                try {//---------------------------loading previous
                                    eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                    logger.all("Eligibilité chargée")
                                } catch (err) { logger.all("! ERREUR : pas d'Eligibilité chargée"); }
                                setTimeout(function () {
                                    if (!eligibilityread) {
                                        message.reply("Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-NEWGIF-EXREEL-1-MAIN\`")
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            if (!args[0]) {
                                                return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            commandname = args[0].toLowerCase();
                                            logger.all("args :" + args);
                                            if (commandname == "help" || commandname == "?") {
                                                return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            if (!args[1]) {
                                                return message.reply(`Erreur : Vérifiez le nombre d'arguments !
Pour rappel la commande s'écrit sous la forme :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            existngiffile = false;
                                            existpgiffile = false;
                                            existhgiffile = false;
                                            try {//---------------------------loading gif file normal
                                                existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                                                logger.all("Ce fichier Normal exite déjà");
                                            } catch (err) { logger.all("Ce fichier Normal n'existe pas"); }
                                            try {//---------------------------loading gif file plus
                                                existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                                                logger.all("Ce fichier Plus exite déjà");
                                            } catch (err) { logger.all("Ce fichier Plus n'existe pas"); }
                                            try {//---------------------------loading gif file hard
                                                existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                                                logger.all("Ce fichier Hard exite déjà");
                                            } catch (err) { logger.all("Ce fichier Hard n'existe pas"); }
                                            existsgiffile = false;
                                            try {//---------------------------loading gif file server
                                                existsgiffile = fs.readFileSync(path.resolve(`${servgifdir}/${commandname}.js`));
                                                logger.all("Ce fichier Serveur exite déjà");
                                            } catch (err) { logger.all("Ce fichier Serveur n'existe pas"); }
                                            setTimeout(function () {
                                                if (existngiffile != false || existpgiffile != false || existhgiffile != false) {
                                                    message.reply(`La commande ,${commandname} existe déjà nativement dans Chaline !\nPar conséquent la nouvella commande personnalisée sera prioritaire.`);
                                                }
                                                if (existsgiffile != false) {
                                                    return message.reply(`La commande ,${commandname} existe déjà sur votre serveur !`);
                                                }
                                                logger.all("commmande n'existe pas");
                                                var actualdate = new Date();

                                                datevar = actualdate.toISOString();
                                                giflisturl = args
                                                giflisturl.shift();
                                                giflisturljson = JSON.stringify(giflisturl)

                                                fs.appendFile(`${servgifdir}/${commandname}.js`, `module.exports = { //Commande générée par ${message.author.tag}(${message.author.id}) (avec AddGif v1.0 - version newgif)
    name: "${commandname}",
    description: "ajoutée par ${message.author.tag}",
    execute(message) {
    const giflist = ${giflisturljson}
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le ${datevar} depuis le channel ${message.channel.name}(${message.channel.id}) sur le serveur ${message.guild.name}(${message.guild.id})`, function (err) {
                                                    if (err) throw err;
                                                    logger.all('File is created successfully.');
                                                });
                                                setTimeout(function () {
                                                    triggerload.reloadgifserver(message.guild.id);
                                                    logger.all(`Nouvelle commande générée dans ${servgifdir}/${commandname}.js`);
                                                    client.channels.cache.get(botchannels.gifServerLogChannel).send(`**-🆕️-** Nouvella commande générée dans ${servgifdir}/${commandname}.js par ${message.author.tag} pour ${message.guild.name}(${message.guild.id}), gifs :\n\`${giflisturl}\``);
                                                    message.reply(`Nouvella commande ,${commandname} ajoutée !`);
                                                }, 1000);
                                            }, 1000);
                                        } else { message.reply(`\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\``) }
                                    }
                                }, 500);
                            } else if (err.code === 'ENOENT') {
                                elgibilitysrv = {
                                    elgibility: 1,
                                    datedelivering: actualdate
                                }
                                const jsonStringcfg = JSON.stringify(elgibilitysrv);
                                fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                                    if (err) {
                                        logger.all(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                                        client.channels.cache.get(botchannels.gifServerLogChannel).send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                                        message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-NEWGIF-EXWREL-1-MAIN\`")
                                    } else {
                                        logger.all(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                        client.channels.cache.get(botchannels.gifServerLogChannel).send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                        message.reply("Mise à jour de l'égibilité du serveur en cours, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-NEWGIF-VEWREL-1-MAIN\`")
                                    }
                                })
                            } else {
                                logger.all('Some other error: ', err.code);
                            }
                        });
                    }
                } catch (err) {
                    console.error(err);
                }
            } catch (error) {
                message.reply(`Une erreur est survenue !
            Pour rappel la commande s'écrit sous la forme :
            > ;newgif gifname example1.gif example2.gif
            gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.
Si vous êtes sûrs que l'erreur ne vient pas de vous : \`;error décrivez le problème\`\nErreur : \`CMD-NEWGIF-0-0-MAIN\``);
            }
        }
    }
}