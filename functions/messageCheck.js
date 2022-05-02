const fs = require('fs');
const path = require('path');
const { client } = require("../index.js");
const logger = require("./logger.js");

const badwords = JSON.parse(fs.readFileSync(path.resolve(`./config/badwords.json`)));


function checkBadwords(msg) {
    badwordlist = badwords.filter(word => msg.content.toLowerCase().includes(word));
    return badwordlist;
}


module.exports = {
    // Check general properties of message
    general: function (message) {
        // Check if the message is safe for community
        suspiciousWords = checkBadwords(message);
        if (suspiciousWords.length > 0) {
            logger.all(`${message.author.tag} a dit ${suspiciousWords.toString()} dans ${message.channel.name}`);
        }
    },
    reactChaline: function (message) {
        if (configreact === '1') {
            if (message.content.startsWith('Chaline') && !message.author.bot) { message.reply('Non mais ça va pas de me réveiller comme ça là !'); }
            else if (message.content.startsWith('Vive Chaline') && !message.author.bot) { message.reply('Donne moi des croquettes au lieu de parler'); }
            else if (message.content.startsWith('!tgmee6') && !message.author.bot) { message.channel.send('Oue j\'avoue femre bien ta gueule le bot !'); }
            else if ((message.content.toLowerCase().includes('chaline') || message.content.includes('<@!813744876214550538>')) && !message.author.bot) { message.channel.send('Coucou ^^'); }
            for (var i in badCat) { //-----------------------------------------------------BAD WORDS--------------------------------------------------------------------
                for (var j in reactchaline) {
                    if (message.content.toLowerCase().includes(reactchaline[j]) && message.content.toLowerCase().includes(badCat[i]) && !message.author.bot) {
                        message.react("😾");
                        return;
                    }
                }
            }
            for (var i in goodCat) { //----------------------------------------------------GOOD WORDS-------------------------------------------------------------------------
                for (var j in reactchaline) {
                    if (message.content.toLowerCase().includes(reactchaline[j]) && message.content.toLowerCase().includes(goodCat[i]) && !message.author.bot) {
                        message.react("😺");
                        return;
                    }
                }
            }
            if (message.content.startsWith('Coucou Chaline') && message.author.bot) { message.channel.send('Casse toi le bot !'); }
        }
    }
}