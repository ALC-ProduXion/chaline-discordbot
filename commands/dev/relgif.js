const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");

module.exports = {
    name: 'relgif',
    description: 'Reload manuellement les gifs',
    execute(message, args) {
        const { client, botchannels } = require("../../index.js");

        if (devlist.includes(message.author.id)) {
            triggerload.reloadgifs();
            logger.all(`${message.author.tag} a reload manuellement les gifs`);
            client.channels.cache.get(botchannels.gifAdminLogChannel).send(`${message.author.tag} a reload manuellement les gifs`);
            message.reply(`Gif rechargés !`);
        }
    }
}