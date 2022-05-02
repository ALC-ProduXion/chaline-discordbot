const random = require("../../functions/random.js");
const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'remgif',
    description: 'Supprimer des gifs natifs',
    execute(message, args) {
        const { client, botchannels } = require("../../index.js");

        if (devlist.includes(message.author.id)) {
            try {
                remreason = message.content.slice(8)
                commandname = args[0].toLowerCase();
                if (commandname == "help" || commandname == "?" || !args[0]) {
                    return message.reply(`Permet de supprimer une commande.
                    > ;remgif nomdelacommande raison`);
                }
                if (undeletablecommand.includes(commandname)) {
                    client.channels.cache.get(botchannels.gifAdminLogChannel).send(`${message.author.tag} a tenté de supprimer ,${remreason}`);
                    return message.reply(`Wow ! Cette commande possède trop de pouvoir je ne peut la supprimer ! :/`);
                }
                existngiffile = false;
                existpgiffile = false;
                existhgiffile = false;
                try {//---------------------------loading gif file normal
                    existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                    logger.all("Ce fichier Normal exite");
                } catch (err) { logger.all("Ce fichier Normal n'existe pas"); }
                try {//---------------------------loading gif file plus
                    existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                    logger.all("Ce fichier Plus exite");
                } catch (err) { logger.all("Ce fichier Plus n'existe pas"); }
                try {//---------------------------loading gif file hard
                    existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                    logger.all("Ce fichier Hard exite");
                } catch (err) { logger.all("Ce fichier Hard n'existe pas"); }
                if (existngiffile != false) {
                    dirnumber = random.int(0, 99999999)
                    dirdate = new Date().toISOString().substring(0, 10).split("-").join("")
                    destinationdir = dirdate + '-' + dirnumber + 'by' + message.author.id
                    try {
                        fs.rename(`./gif/Normal/${commandname}.js`, `./gif/deleted/${commandname}-Ndeleted${destinationdir}.js`, function (err) {
                            if (err) throw err
                            logger.all(`${commandname} a été supprimée par ${message.author.tag}`)
                        })
                        setTimeout(function () {
                            triggerload.reloadgifs();
                            client.channels.cache.get(botchannels.gifAdminLogChannel).send(`${message.author.tag} a supprimé ,${remreason}`);
                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                        }, 1000);
                    } catch (err) { return console.error(err); }
                }
                else if (existpgiffile != false) {
                    dirnumber = random.int(0, 99999999)
                    dirdate = new Date().toISOString().substring(0, 10).split("-").join("")
                    destinationdir = dirdate + '-' + dirnumber + 'by' + message.author.id
                    try {
                        fs.rename(`./gif/Plus/${commandname}.js`, `./gif/deleted/${commandname}-Pdeleted${destinationdir}.js`, function (err) {
                            if (err) throw err
                            logger.all(`${commandname} a été supprimée par ${message.author.tag}`)
                        })
                        setTimeout(function () {
                            triggerload.reloadgifs();
                            client.channels.cache.get(botchannels.gifAdminLogChannel).send(`${message.author.tag} a supprimé ,${remreason}`);
                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                        }, 1000);
                    } catch (err) { return console.error(err); }
                }
                else if (existhgiffile != false) {
                    dirnumber = random.int(0, 99999999)
                    dirdate = new Date().toISOString().substring(0, 10).split("-").join("")
                    destinationdir = dirdate + '-' + dirnumber + 'by' + message.author.id
                    try {
                        fs.rename(`./gif/Hard/${commandname}.js`, `./gif/deleted/${commandname}-Hdeleted${destinationdir}.js`, function (err) {
                            if (err) throw err
                            logger.all(`${commandname} a été supprimée par ${message.author.tag}`)
                        })
                        setTimeout(function () {
                            triggerload.reloadgifs();
                            client.channels.cache.get(botchannels.gifAdminLogChannel).send(`${message.author.tag} a supprimé ,${remreason}`);
                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                        }, 1000);
                    } catch (err) { return console.error(err); }
                }
                else {
                    return message.reply(`Il n'y a pas de commande nommée ,${commandname} :/`)
                }
            } catch (error) { console.error(error); }
        }
    }
}