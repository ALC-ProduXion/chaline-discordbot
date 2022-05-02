const logger = require("../../functions/logger.js");

module.exports = {
    name: 'react',
    description: 'Réagir à un message avec le bot',
    execute(message, args) {
        const { client } = require("../../index.js");
        if (fullpower.includes(message.author.id)) {
            try {
                const argsend = message.content.slice(6).split(/ +/);
                let channeltosend = argsend[1];
                let msgtoreact = argsend[2];
                let reactemote = argsend[3];
                client.channels.cache.get(channeltosend).messages.fetch(msgtoreact).then(m => { m.react(reactemote); });
            } catch (error) {
                message.reply('Ton ID de message ou ton emote ne me paraît pas bon...');
            }
        }
    }
}