const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Afficher des avatars',
    execute(message) {
        if (!message.mentions.users.size) {
            userinfo = message.author;
            memberinfo = message.guild.member(userinfo);

            const photo = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle("Votre avatar est :")
                .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png' }))
                .setImage(message.author.displayAvatarURL({ format: 'png' }))
            message.channel.send(photo);
        }
        else {
            const avatarList = message.mentions.users.map(user => {
                memberinfo = message.guild.member(user);

                const photo = new MessageEmbed()
                    .setColor(memberinfo.displayColor)
                    .setTitle(`L'avatar de ${user.username} est :`)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png' }))
                    .setImage(user.displayAvatarURL({ format: 'png' }))
                message.channel.send(photo);
            });
        }
    }
}