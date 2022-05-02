module.exports = {
    name: 'serverinfo',
    description: 'Infos serv',
    execute(message) {
        guildinfo = message.guild;
        memberCountinfo = guildinfo.members.cache.filter(member => !member.user.bot).size;
        botCountinfo = guildinfo.memberCount - memberCountinfo;
        nbChannels = guildinfo.channels.cache.size;
        nbRoles = guildinfo.roles.cache.size;
        serverOwner = guildinfo.members.cache.find(user => user.id === guildinfo.ownerID);
        const { Client, MessageEmbed, GuildMember } = require('discord.js');
        const embedinfo = new MessageEmbed()


            .setColor(0xfbfbfb)
            .setTitle(`Infos sur ${guildinfo.name}`)
            .setAuthor(guildinfo.name, guildinfo.iconURL())
            .setThumbnail(guildinfo.iconURL())
            .addFields(
                { name: 'Infos générales', value: `Compte à été créé le ${guildinfo.createdAt} par ${guildinfo.ownerID}\nID : ${guildinfo.id}\nChannels : ${nbChannels}` },
                { name: '\u200B', value: '\u200B' },
                { name: 'Membres', value: guildinfo.memberCount, inline: true },
                { name: 'Rôles ', value: nbRoles, inline: true },
            )
            .setTimestamp()
            .setFooter(`Infos demandées par ${message.author.username}`, message.author.displayAvatarURL({ format: 'png' }));
        message.channel.send(embedinfo);
    }
}