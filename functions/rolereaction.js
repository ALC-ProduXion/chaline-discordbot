const fs = require('fs');
const path = require('path');
const { client } = require("../index.js");
const logger = require("./logger.js");

module.exports = {
    // cache messages
    cache: function () {
        console.log("Caching messages...");
        const msgFiles = fs.readdirSync('./data/messages/').filter(file => file.endsWith('.json'));
        for (const file of msgFiles) {
            idChMsg = file.replace('.json', '').split(/\o+/);
            console.log(idChMsg);
            try {
                client.channels.cache.get(idChMsg[0]).messages.fetch(idChMsg[1])
            } catch (error) {
                console.error(error);
            }

        }
    },

    // give a role
    give: function (reaction, user) {
        fileMessage = `${reaction.message.channel.id}o${reaction.message.id}`;
        fs.stat(`./data/messages/${fileMessage}.json`, function (err, stat) {
            if (err == null) {
                try {
                    member = reaction.message.guild.members.cache.find(mem => mem.user.id == user.id);
                    msginfo = JSON.parse(fs.readFileSync(path.resolve(`./data/messages/${fileMessage}.json`)));
                    for (let index = 1; index < msginfo.reactnumber + 1; index++) {
                        eval(`
                        if (msginfo.action${index} && msginfo.emoj${index} == reaction.emoji.name && msginfo.action${index} != "none") {
                            
                            roleactionID = msginfo.action${index};
                            console.log(roleactionID);
                            memberRole = reaction.message.guild.roles.cache.find(role => role.id == roleactionID);
                            member.roles.add(memberRole);
                            logger.all(user.tag + " a obtenu le rôle par réaction : " + memberRole.name);
                        }`);
                    }

                } catch (err) {
                    console.error(err);
                }

            } else {
                null;
                //console.log('Error: ', err.code);
            }
        });
    },

    // give a role
    remove: function (reaction, user) {
        fileMessage = `${reaction.message.channel.id}o${reaction.message.id}`;
        fs.stat(`./data/messages/${fileMessage}.json`, function (err, stat) {
            if (err == null) {
                try {
                    member = reaction.message.guild.members.cache.find(mem => mem.user.id == user.id);
                    msginfo = JSON.parse(fs.readFileSync(path.resolve(`./data/messages/${fileMessage}.json`)));
                    for (let index = 1; index < msginfo.reactnumber + 1; index++) {
                        eval(`
                        if (msginfo.action${index} && msginfo.emoj${index} == reaction.emoji.name && msginfo.action${index} != "none") {
                            
                            roleactionID = msginfo.action${index};
                            console.log(roleactionID);
                            memberRole = reaction.message.guild.roles.cache.find(role => role.id == roleactionID);
                            member.roles.remove(memberRole);
                            logger.all(user.tag + " a enlevé son rôle par réaction : " + memberRole.name);
                        }`);
                    }
                } catch (err) {
                    console.error(err);
                }

            } else {
                null;
                //console.log('Error: ', err.code);
            }
        });
    },
}