module.exports = {
    name: 'clear',
    description: 'Envoie un long message vide',
    execute(message, args) {
        if (message.member.permissions.has('MANAGE_MESSAGES', 1)) {
            message.channel.send(`${pxclear}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${pxclear}`)
        } else { message.reply('Tu n\'est pas modérateur !'); }
    }
}