const fs = require('fs');
const path = require('path');
const logger = require("../../functions/logger.js");

module.exports = {
    name: 'suggest',
    description: 'Faire une suggestion',
    execute(message) {
        const { client, botchannels } = require("../../index.js");

        client.channels.cache.get(botchannels.suggestionChannel).send(`${message.author.tag}(id:${message.author.id}) a suggéré depuis le serveur ${message.guild.name} (channel : ${message.channel.id}) :\n\n ${message.content.slice(8)}`);
        logger.all(message.author.tag + " a fait une suggestion !");
        message.reply(`Suggestion transmise !`);

    }
}