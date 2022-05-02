module.exports = {
    name: 'del',
    description: 'Supprimer des messages',
    execute(message, args) {
        if (message.member.permissions.has('MANAGE_MESSAGES', 1)) {
            const amount = parseInt(args[0]) + 1;
            if (isNaN(amount)) {
                return message.reply('Ce n\'est pas un nombre valide !');
            }
            else if (amount <= 1 || amount > 100) {
                return message.reply('Ce n\'est pas un nombre valide ! (entre 1 et 99)');
            }
            message.channel.bulkDelete(amount)
                .then(messages => {
                    console.log(`${messages.size - 1} messages supprimés par ${message.author.username} sur ${message.guild.name} dans ${message.channel.name}`);
                });
        } else { message.reply('Tu n\'est pas modérateur !'); }
    }
}