module.exports = {
    name: 'help',
    description: 'Tu n\'auras pas d\'aide avec cette commande...',
    execute(message) {
        message.channel.send('Alors comme ça tu veux la liste des commandes ?\n> `;meow` est préférable à `;help`,\nJe suis Chaline quand même.');
    }
}