const logger = require("../functions/logger.js");

module.exports = {
    // When a message is received
    onMessage: function (message) {
        const { client, botchannels } = require("../../index.js");

        logger.all(message.author.tag + " (" + message.author.id + ") a envoyé en mp : " + message.content)
        client.channels.cache.get("841940895502958642").send(message.author.tag + " (" + message.author.id + ") a envoyé en mp : " + message.content);

        if (message.author.bot) return

        if (message.content.toLowerCase().startsWith(";suggest ")) {
            client.channels.cache.get(botchannels.suggestionChannel).send(`${message.author.tag}(id:${message.author.id}) a suggéré depuis les mp du bot :\n\n ${message.content}`);
            logger.all(message.author.tag + " a fait une suggestion !");
            message.reply(`Suggestion transmise !`);
        }
        else if (message.content.toLowerCase().startsWith(";error ")) {
            client.channels.cache.get(botchannels.errorChannel).send(`${message.author.tag}(id:${message.author.id}) a report une erreur depuis les mp du bot :\n\n ${message.content}`);
            logger.all(message.author.tag + " a report une erreur !");
            message.reply(`Rapport d'erreur transmis !`);
        }
        else if (message.content.toLowerCase().startsWith(";")) {
            message.reply("Seules les commandes `;suggest` et `;error` sont disponibles en messages privés.\nPour avoir accès à toutes les fonctionnalités merci d'utiliser ce bot sur un serveur.");
            logger.all(message.author.tag + " a été informé que les commandes en mp étaient désactivées");
        }
    }
}