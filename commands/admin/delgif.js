const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'delgif',
    description: 'Supprimer des gifs personnalisés',
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
                                message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-DELGIF-CRWREL-1-MAIN\`")
                            } else {
                                logger.all(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                client.channels.cache.get(botchannels.gifServerLogChannel).send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                try {//---------------------------loading previous
                                    eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                    logger.all("Eligibilité chargée")
                                } catch (err) { logger.all("! ERREUR : pas d'Eligibilité chargée"); }
                                setTimeout(function () {
                                    if (!eligibilityread) {
                                        message.reply("Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-DELGIF-CRREEL-1-MAIN\`")
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            try {
                                                remreason = message.content.slice(8)
                                                if (!args[0]) {
                                                    return message.reply(`Permet de supprimer une commande de gif du serveur.
                                                    > ;delgif nomdelacommande raison`);
                                                }
                                                commandname = args[0].toLowerCase();
                                                if (commandname == "help" || commandname == "?") {
                                                    return message.reply(`Permet de supprimer une commande de gif du serveur.
                                                    > ;delgif nomdelacommande raison`);
                                                }
                                                if (undeletablecommand.includes(commandname)) {
                                                    client.channels.cache.get(botchannels.gifServerLogChannel).send(`${message.author.tag} a tenté de supprimer ,${remreason} sur le serveur ${message.guild.name}(${message.guild.id}`);
                                                    return message.reply(`Wow ! Cette commande possède trop de pouvoir je ne peut la supprimer ! :/`);
                                                }
                                                existsgiffile = false;
                                                try {//---------------------------loading gif file serv
                                                    existsgiffile = fs.readFileSync(path.resolve(`${servgifdir}/${commandname}.js`));
                                                    logger.all("Ce fichier Serveur exite");
                                                } catch (err) { logger.all("Ce fichier Serveur n'existe pas"); }
                                                if (existsgiffile != false) {
                                                    try {
                                                        fs.unlink(`${servgifdir}/${commandname}.js`, function (err) {
                                                            if (err) throw err
                                                            logger.all(`${commandname} a été supprimée par ${message.author.tag}`)
                                                        })
                                                        setTimeout(function () {
                                                            triggerload.reloadgifserver(message.guild.id);
                                                            client.channels.cache.get(botchannels.gifServerLogChannel).send(`**-🚮️-** ${message.author.tag} a supprimé ,${remreason} sur le serveur ${message.guild.name}(${message.guild.id})`);
                                                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                                                        }, 1000);
                                                    } catch (err) { return console.error(err); }
                                                }
                                                else {
                                                    return message.reply(`Il n'y a pas de commande nommée ,${commandname} sur votre serveur:/`)
                                                }
                                            } catch (error) { console.error(error); }
                                        } else { message.reply(`\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\``) }
                                    }
                                }, 500);
                            }
                        })
                    } else {
                        logger.all("(folder already exists) ;delgif use on " + message.guild.name);
                        fs.stat(`${servgifdir}/settings${message.guild.id}.json`, function (err, stat) {
                            if (err == null) {
                                try {//---------------------------loading previous
                                    eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                    logger.all("Eligibilité chargée")
                                } catch (err) { logger.all("! ERREUR : pas d'Eligibilité chargée"); }
                                setTimeout(function () {
                                    if (!eligibilityread) {
                                        message.reply("Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-DELGIF-EXREEL-1-MAIN\`")
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            try {
                                                remreason = message.content.slice(8)
                                                if (!args[0]) {
                                                    return message.reply(`Permet de supprimer une commande de gif du serveur.
                                                    > ;delgif nomdelacommande raison`);
                                                }
                                                commandname = args[0].toLowerCase();
                                                if (commandname == "help" || commandname == "?" || !args[0]) {
                                                    return message.reply(`Permet de supprimer une commande de gif du serveur.
                                                    > ;delgif nomdelacommande raison`);
                                                }
                                                if (undeletablecommand.includes(commandname)) {
                                                    client.channels.cache.get(botchannels.gifServerLogChannel).send(`${message.author.tag} a tenté de supprimer ,${remreason} sur le serveur ${message.guild.name}(${message.guild.id}`);
                                                    return message.reply(`Wow ! Cette commande possède trop de pouvoir je ne peut la supprimer ! :/`);
                                                }
                                                existsgiffile = false;
                                                try {//---------------------------loading gif file serv
                                                    existsgiffile = fs.readFileSync(path.resolve(`${servgifdir}/${commandname}.js`));
                                                    logger.all("Ce fichier Serveur exite");
                                                } catch (err) { logger.all("Ce fichier Serveur n'existe pas"); }
                                                if (existsgiffile != false) {
                                                    try {
                                                        fs.unlink(`${servgifdir}/${commandname}.js`, function (err) {
                                                            if (err) throw err
                                                            logger.all(`${commandname} a été supprimée par ${message.author.tag}`)
                                                        })
                                                        setTimeout(function () {
                                                            triggerload.reloadgifserver(message.guild.id);
                                                            client.channels.cache.get(botchannels.gifServerLogChannel).send(`**-🚮️-** ${message.author.tag} a supprimé ,${remreason} sur le serveur ${message.guild.name}(${message.guild.id})`);
                                                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                                                        }, 1000);
                                                    } catch (err) { return console.error(err); }
                                                }
                                                else {
                                                    return message.reply(`Il n'y a pas de commande nommée ,${commandname} sur votre serveur:/`)
                                                }
                                            } catch (error) { console.error(error); }
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
                                        message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-DELGIF-EXWREL-1-MAIN\`")
                                    } else {
                                        logger.all(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                        client.channels.cache.get(botchannels.gifServerLogChannel).send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                        message.reply("Mise à jour de l'égibilité du serveur en cours, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-DELGIF-VEWREL-1-MAIN\`")
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
            > ;delgif gifname
Si vous êtes sûrs que l'erreur ne vient pas de vous : \`;error décrivez le problème\`\nErreur : \`CMD-DELGIF-0-0-MAIN\``);
            }
        }
    }
}