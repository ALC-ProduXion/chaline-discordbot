const fs = require('fs');
const path = require('path');
const logger = require("../../functions/logger.js");

module.exports = {
    name: 'error',
    description: 'Faire remonter une erreur rencontrée',
    execute(message) {
        const { client, botchannels } = require("../../index.js");

        client.channels.cache.get(botchannels.errorChannel).send(`${message.author.tag}(id:${message.author.id}) a report une erreur depuis le serveur ${message.guild.name} (channel : ${message.channel.id}) :\n\n ${message.content.slice(6)}`);
        logger.all(message.author.tag + " a report une erreur !");
        message.reply(`Rapport d'erreur transmis !`);

    }
}