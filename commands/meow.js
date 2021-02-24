module.exports = {
    name: 'meow',
    description: 'list commands',
    execute(message) {
        message.channel.send('Alors comme ça tu veux la liste des commandes ?\n> `;meow` pour m\'appeler mais ça tu le savais déjà\n> `;avatar @someone (optionnel)` pour avoir ton avatar ou celui de quelqu\'un\n> `;server` pour avoir plus d\'infos sur le serveur\n> `;play` pour me faire jouer de la musique\n> `;del X` (Uniquement pour les modérateurs) supprime une quantité de messages\nPour le reste contactez le développeur du bot **MagicTINTIN#4389**.');
    }
}