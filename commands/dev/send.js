module.exports = {
    name: 'send',
    description: 'Envoyer un message avec le bot',
    execute(message, args) {
        const { client } = require("../../index.js");
        if (fullpower.includes(message.author.id)) {
            try {
                let channeltosend = args[0];
                let msgtosend = args.slice(1).join(' ');
                client.channels.cache.get(channeltosend).send(msgtosend);
            } catch (error) {
                message.reply('Ton ID de salon me paraît pas bon...');
            }
        }
    }
}