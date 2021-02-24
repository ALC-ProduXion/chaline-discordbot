module.exports = {
    name: 'help',
    description: 'list commands',
    execute(message) {
        message.channel.send('Alors comme ça tu veux la liste des commandes ?\n> `;meow` est préférable à `;help`,\nJe suis Chaline quand même.');
    }
}