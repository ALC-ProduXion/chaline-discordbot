const logger = require("../../functions/logger.js");
const discordTTSes = require('discord-tts-spanish');

module.exports = {
    name: 'stopsay',
    description: 'Quite le salon vocal actif',
    execute(message, args) {
        const { client } = require("../../index.js");
        try {
            if (fullpower.includes(message.author.id)) {
                const channelId = message.member.voice.channelID;
                const channel = client.channels.cache.get(channelId);
                channel.leave()
            }
        } catch (err) {
            console.error(err);
            message.reply(`Hey merci d'aller dans le channel souhaité !`)
        }
    }
}