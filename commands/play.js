const { exec } = require("child_process");

module.exports = {
    name: 'play',
    description: 'Play sound',
    async execute(message, args) {
        if (!message.guild) return;
        if (args[0] === '') {
            message.member.voice.channel.leave();
            message.client.user.setActivity('la baballe (;meow pour m\'appeler)', { type: 'PLAYING'});
            message.reply('Donne moi des croquettes euh du son.\nAllez moi je retourne jouer à la baballe.');
        }
        if (args[0] === 'stop') {
            message.member.voice.channel.leave();
            message.client.user.setActivity('la baballe (;meow pour m\'appeler)', { type: 'PLAYING'});
            message.reply('Dacodac, moi ça me va, j\'ai pas fini de jouer avec ma baballe.');
            return
        }
        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0]), {
                volume: 1,
            });
            dispatcher.on('start', () => {
                console.log(`${message.author.username} écoute ${args[0]} sur ${message.guild.name}`);
                message.client.user.setActivity('de la musique pour chat', { type: 'LISTENING'}, { url:args[0]});
            })
            dispatcher.on('error', () => {
                message.reply('Donne moi du vrai son ! J\'arrive pas à lire celui là...\nAllez moi je retourne jouer à la baballe.');
                message.member.voice.channel.leave();
                message.client.user.setActivity('la baballe (;meow pour m\'appeler)', { type: 'PLAYING'});
            })
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
                message.client.user.setActivity('la baballe (;meow pour m\'appeler)', { type: 'PLAYING'});
                message.channel.send('J\'ai fini je me casse, faut que je me repose après tout ce travail là pfiou je suis épuisé !');
            })
          } else {
            message.reply('Elles sont où les croquettes ?\nVas dans un salon et rappelle moi...');
          }
    }
}