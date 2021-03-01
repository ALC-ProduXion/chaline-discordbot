module.exports = {
    name: 'userinfo',
    description: 'Afficher infos sur utilisateur',
    execute(message) {
        if (!message.mentions.users.size) {
            userinfo = message.author;
            memberinfo = message.guild.member(userinfo);
            if (!memberinfo.nickname) {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle(`A propos de ${userinfo.tag}`)
                .setAuthor(userinfo.tag, userinfo.displayAvatarURL({format:'png' }))
                .setThumbnail(userinfo.displayAvatarURL({format:'png' }))
                .addFields(
                    { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Serveur rejoint', value: memberinfo.joinedAt, inline: true },
                    { name: 'Rôles', value: memberinfo.roles.highest.name, inline: true },
                )
                .setTimestamp()
                .setFooter(`Infos demandées par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedinfo);
            } else {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle(`A propos de ${userinfo.tag} (${memberinfo.nickname})`)
                .setAuthor(userinfo.tag, userinfo.displayAvatarURL({format:'png' }))
                .setThumbnail(userinfo.displayAvatarURL({format:'png' }))
                .addFields(
                    { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Serveur rejoint', value: memberinfo.joinedAt, inline: true },
                    { name: 'Rôles', value: memberinfo.roles.highest.name, inline: true },
                )
                .setTimestamp()
                .setFooter(`Infos demandées par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedinfo);
            }
        } 
        else {
            userinfo = message.mentions.users.first();
            memberinfo = message.guild.member(userinfo);
            if (!memberinfo.nickname) {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle(`A propos de ${userinfo.tag}`)
                .setAuthor(userinfo.tag, userinfo.displayAvatarURL({format:'png' }))
                .setThumbnail(userinfo.displayAvatarURL({format:'png' }))
                .addFields(
                    { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Serveur rejoint', value: memberinfo.joinedAt, inline: true },
                    { name: 'Rôles', value: memberinfo.roles.highest.name, inline: true },
                )
                .setTimestamp()
                .setFooter(`Infos demandées par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedinfo);
            } else {
                const { Client, MessageEmbed, GuildMember } = require('discord.js');
                const embedinfo = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle(`A propos de ${userinfo.tag} (${memberinfo.nickname})`)
                .setAuthor(userinfo.tag, userinfo.displayAvatarURL({format:'png' }))
                .setThumbnail(userinfo.displayAvatarURL({format:'png' }))
                .addFields(
                    { name: 'Infos générales', value: `Compte à été créé le ${userinfo.createdAt}\nID : ${userinfo.id}` },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Serveur rejoint', value: memberinfo.joinedAt, inline: true },
                    { name: 'Rôles', value: memberinfo.roles.highest.name, inline: true },
                )
                .setTimestamp()
                .setFooter(`Infos demandées par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedinfo);
            }
     }}
}