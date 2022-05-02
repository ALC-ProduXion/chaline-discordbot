const logger = require("../../functions/logger.js");
const discordTTSes = require('discord-tts-spanish');

module.exports = {
    name: 'essay',
    description: 'TTS Espagnol en vocal',
    execute(message, args) {
        const { client } = require("../../index.js");
        try {
            if (fullpower.includes(message.author.id)) {
                messagetospeech = message.content.slice(7)
                logger.all("Chaline a parlé : " + messagetospeech);
                const broadcast = client.voice.createBroadcast();
                const channelId = message.member.voice.channelID;
                const channel = client.channels.cache.get(channelId);
                channel.join().then(connection => {
                    broadcast.play(discordTTSes.getVoiceStream(messagetospeech));
                    const dispatcher = connection.play(broadcast);
                });
            }
        } catch (err) {
            console.error(err);
            message.reply(`Hey merci d'aller dans le channel souhaité !`)
        }
    }
}