const { exec } = require("child_process");

module.exports = {
    name: 'play',
    description: 'Play sound',
    async execute(message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0]), {
                volume: 0.5,
            });
            dispatcher.on('start', () => {
                message.client.user.setActivity('de la musique pour chat', { type: 'LISTENING'}, { url:args[0]});
            })
            dispatcher.on('error', () => {
                message.reply('Donne moi du vrai son ! J\'arrive pas à lire celui là...\nAllez moi je retourne jouer à la baballe.')
                message.member.voice.channel.leave();
                message.client.user.setActivity('la baballe', { type: 'PLAYING'});
            })
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
                message.client.user.setActivity('la baballe', { type: 'PLAYING'});
            })
          } else {
            message.reply('You need to join a voice channel first!');
          }
    }
}