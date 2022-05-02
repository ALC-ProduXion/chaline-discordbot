const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'addgif',
    description: 'Ajouter des gifs natifs',
    execute(message, args) {
        const { client, botchannels } = require("../../index.js");

        if (devlist.includes(message.author.id)) {
            try {
                commandname = args[0].toLowerCase();
                logger.all("args " + args);

                if (commandname == "help" || commandname == "?") {
                    return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > ;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif
                gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                }
                if (!args[3]) {
                    return message.reply(`Erreur : Vérifiez le nombre d'arguments !
                Pour rappel la commande s'écrit sous la forme :
                > ;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif
                gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                }

                commanddesc = args[1].split("+").join(" ");
                commandcatg = args[2];
                if (commandcatg == "n") {
                    commandfold = "Normal";
                } else if (commandcatg == "p") {
                    commandfold = "Plus";
                } else if (commandcatg == "h") {
                    commandfold = "Hard";
                } else {
                    return message.reply(`Erreur : la catégorie doit être n(pour Normal), p(pour Plus) ou h(pour Hard)`);
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

                setTimeout(function () {
                    if (existngiffile != false || existpgiffile != false || existhgiffile != false) {
                        return message.reply(`La commande ,${commandname} existe déjà !`);
                    }
                    logger.all("commmande n'existe pas");
                    var actualdate = new Date();

                    datevar = actualdate.toISOString();
                    giflisturl = args
                    giflisturl.shift();
                    giflisturl.shift();
                    giflisturl.shift();
                    giflisturljson = JSON.stringify(giflisturl)

                    fs.appendFile(`./gif/${commandfold}/${commandname}.js`, `module.exports = { //Commande générée par ${message.author.tag}(${message.author.id}) (avec AddGif v1.0)
    name: "${commandname}",
    description: "${commanddesc}",
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
                        servergifchannel = client.guilds.cache.get(botchannels.serverID)
                        if (commandcatg == "n") {
                            ngifchannel = servergifchannel.channels.cache.find(ch => ch.name === 'cmd-gif-normal');
                            ngifchannel.send(`${commandname} : *${commanddesc}*`);
                        } else if (commandcatg == "p") {
                            pgifchannel = servergifchannel.channels.cache.find(ch => ch.name === 'cmd-gif-plus')
                            pgifchannel.send(`${commandname} : *${commanddesc}*`);
                        } else if (commandcatg == "h") {
                            hgifchannel = servergifchannel.channels.cache.find(ch => ch.name === 'cmd-gif-hard')
                            hgifchannel.send(`${commandname} : *${commanddesc}*`);
                        }
                        triggerload.reloadgifs();
                        logger.all(`Nouvella commande générée dans ./gif/${commandfold}/${commandname}.js`);
                        client.channels.cache.get(botchannels.gifAdminLogChannel).send(`Nouvella commande générée dans ./gif/${commandfold}/${commandname}.js par ${message.author.tag}, gifs : \n\`${giflisturl}\``);
                        message.reply(`Nouvella commande ,${commandname} ajoutée !`);
                    }, 1000);
                }, 1000);

            } catch (error) {
                message.reply(`Une erreur est survenue !
            Pour rappel la commande s'écrit sous la forme :
            > ;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif
            gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
            }
        }
    }
}