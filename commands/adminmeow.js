module.exports = {
    name: 'adminmeow',
    description: 'list admin commands',
    execute(message) {
        if (message.member.permissions.has('MANAGE_MESSAGES', 1)) {
            const { Client, MessageEmbed } = require('discord.js');
            const embedmeow = new MessageEmbed()
            .setTitle('Liste des commandes admin')
            .setColor(0xff0000)
            .setDescription("Voici la liste des commandes pour les admins\n\n> `;pingembed ...` est la version `;embed ...` qui mentionne everyone\n\n> `;del X` supprime une quantité de messages\n\n> `;kick @someone raison` pour expulser quelqu'un du serveur (raison optionnelle)\n\n> `;ban @someone raison` pour bannir quelqu'un du serveur (raison optionnelle)\n\n> `;config help` pour configurer Chaline sur votre serveur\n\n> `;welcome help` pour configurer la bienvenue sur votre serveur\n\nPour plus d\'infos tapez `;about`.");
            message.channel.send(embedmeow);
        } else { message.reply('Tu n\'est pas modérateur !');}
    }
}



