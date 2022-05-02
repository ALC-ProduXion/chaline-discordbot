const fs = require('fs');
const path = require('path');
const logger = require("./logger.js");

module.exports = {
    // load json conf
    initafk: function () {
        listafk = {}
        try {
            listafk = JSON.parse(`` + fs.readFileSync(path.resolve(`./config/afk.json`)) + ``);
        } catch (err) {
            listafk = {}
        }
    },
    checkafk: function (message) {
        const { client, botchannels } = require("../index.js");

        if (message.mentions.users.first() && !botchannels.chalineBotsID.includes(message.author.id)) {
            try {
                usersmentions = message.mentions.users

                for (const user of usersmentions) {
                    // pour toutes les mentions du message on verifie si la personne concernée est afk
                    if (message.content.includes(`<@!${user[1].id}>`) || client.users.cache.get(user[1].id).tag) {

                        if (listafk[user[1].id]) {

                            logger.all(user[1].id + " est afk et s'est fait(e) déranger par " + message.author.id);
                            afksettings = listafk[user[1].id].split(/ +/);
                            whitelistafklist = afksettings[0].split(/\++/);

                            // recherche du type de message à envoyer
                            if (whitelistafklist == "adv") {

                                if (!afksettings[2]) return logger.all("Not enough args")
                                afksettings.shift()
                                whitelistafklist = afksettings[0].split(/\++/);

                                if (whitelistafklist.includes(message.author.id)) return logger.all("mention mais whitelist")
                                afksettings.shift()
                                afksettingsprelist = afksettings.join(" ");
                                afksettingslist = afksettingsprelist.split(/\|+/);
                                for (let afkmsgservn = 0; afkmsgservn < afksettingslist.length; afkmsgservn++) {

                                    srvafkmsg = afksettingslist[afkmsgservn].split(/ +/);
                                    if (srvafkmsg[0] == "") srvafkmsg.shift()

                                    if (srvafkmsg[0] == message.guild.id || srvafkmsg[0] == "all") {
                                        srvafkmsg.shift()
                                        afkmessage = srvafkmsg.join(" ")
                                        return message.reply(afkmessage)
                                    }
                                }

                            } else {

                                if (whitelistafklist.includes(message.author.id)) {
                                    logger.all("mention mais whitelist");
                                } else {
                                    afksettings.shift()
                                    afkmessage = afksettings.join(" ")
                                    message.reply(afkmessage)
                                }

                            }
                        }
                    }
                }

            } catch (error) {
                console.error(error);
            }
        }
    }
}