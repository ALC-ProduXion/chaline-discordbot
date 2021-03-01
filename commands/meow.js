module.exports = {
    name: 'meow',
    description: 'list commands',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embedmeow = new MessageEmbed()
        .setTitle('Liste des commandes')
        .setColor(0x57ead3)
        .setDescription('Alors comme ça tu veux la liste des commandes ?\n\n> `;meow` pour m\'appeler mais ça tu le savais déjà\n\n> `;avatar @someone (optionnel)` pour avoir ton avatar ou celui de quelqu\'un\n\n> `;userinfo @someone (optionnel)` pour avoir plus d\'infos sur un utilisateur\n\n> `;serverinfo` pour avoir plus d\'infos sur le serveur\n\n> `;play` pour me faire jouer de la musique\n\n> `;embed help` pour écrire un joli message comme celui là\n\nPour plus d\'infos tapez `;about`.');
        message.channel.send(embedmeow);
    }
}