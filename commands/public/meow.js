module.exports = {
    name: 'meow',
    description: 'Lister les commandes disponibles',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embedmeow = new MessageEmbed()
            .setTitle('Liste des commandes')
            .setColor(0x57ead3)
            .setDescription(`Alors comme ça tu veux la liste des commandes ?
\n> \`;meow\` pour m\'appeler mais ça tu le savais déjà
\n> \`;avatar @someone (optionnel)\` pour avoir ton avatar ou celui de quelqu\'un
\n> \`;userinfo @someone (optionnel)\` pour avoir plus d\'infos sur un utilisateur
\n> \`;serverinfo\` pour avoir plus d\'infos sur le serveur
\n> \`;embed help\` pour écrire un joli message comme celui là
\n> \`;gif\` pour avoir des infos sur les commandes de gif
\n> \`;mygif\` pour avoir des infos sur les gifs personnalisés
\n> \`;autoanswer\` pour paramétrer un répondeur automatique
\n> \`;suggest suggestion...\` pour nous faire des suggestions
\n> \`;error erreur...\` pour nous signaler une erreur
\nPour plus d\'infos tapez \`;about\`.`);
        message.channel.send(embedmeow);
    }
}