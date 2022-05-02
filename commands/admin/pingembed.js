module.exports = {
    name: 'pingembed', //COMMANDE CREE PAR MagicTINTIN (ALC-ProdXion) : ;embed mon_titre couleurhexa lienvignette lienimage mini_titre contenu_principal choix_1 contenu_choix_1 choix_2 contenu_choix_2 choix_3 contenu_choix_3 
    description: 'Joli message qui mentionne tout le monde',
    execute(message, args) {
        if (message.member.permissions.has('MENTION_EVERYONE', 1)) {
            userinfo = message.author;
            memberinfo = message.guild.member(userinfo);
            if (!args[0] || !args[1] || !args[6]) return message.reply("Tapez ;embed help pour obtenir de l'aide")
            //init embed
            message.channel.send("@everyone Hey salut à tous !");
            if (args[0] === 'n') { msgtitle = "" } else { msgtitle = args[0].split("+").join(" "); }
            if (args[1] === 'n') { msgcolor = memberinfo.displayColor } else { msgcolor = args[1] }
            if (args[2] === 'n') { msgthumbnail = "" } else { msgthumbnail = args[2] }
            if (args[3] === 'n') { msgimage = "" } else { msgimage = args[3] }
            if (args[4] === 'n') { minititre = "" } else { minititre = args[4].split("+").join(" "); }
            if (args[5] === 'n') { msgcontent = "" } else { msgcontent = args[5].split("+").join(" "); }
            //type de message choisi
            if (args[6] === 'n') {
                const { Client, MessageEmbed } = require('discord.js');
                const embedmeow = new MessageEmbed()
                    .setColor(msgcolor)
                    .setTitle(msgtitle)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png' }))
                    .setThumbnail(msgthumbnail)
                    .setImage(msgimage)
                    .addFields(
                        { name: minititre, value: msgcontent },
                    )
                    .setTimestamp()
                    .setFooter(`Message écrit par ${message.author.username}`, message.author.displayAvatarURL({ format: 'png' }));
                message.channel.send(embedmeow);
                setTimeout(function () { message.delete; return }, 5000);
            }
            else if (args[8] === 'n') {
                if (args[6] === 'n') { choix1title = "Choix 1" } else { choix1title = args[6].split("+").join(" "); }
                if (args[7] === 'n') { mchoix1content = "" } else { mchoix1content = args[7].split("+").join(" "); }
                const { Client, MessageEmbed } = require('discord.js');
                const embedmeow = new MessageEmbed()
                    .setColor(msgcolor)
                    .setTitle(msgtitle)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png' }))
                    .setThumbnail(msgthumbnail)
                    .setImage(msgimage)
                    .addFields(
                        { name: minititre, value: msgcontent },
                        { name: '\u200B', value: '\u200B' },
                        { name: choix1title, value: mchoix1content, inline: true },
                    )
                    .setTimestamp()
                    .setFooter(`Message écrit par ${message.author.username}`, message.author.displayAvatarURL({ format: 'png' }));
                message.channel.send(embedmeow);
                setTimeout(function () { message.delete; return }, 5000);
            }
            else {
                if (args[6] === 'n') { choix1title = "Choix 1" } else { choix1title = args[6].split("+").join(" "); }
                if (args[7] === 'n') { mchoix1content = "" } else { mchoix1content = args[7].split("+").join(" "); }
                if (args[8] === 'n') { choix2title = "Choix 2" } else { choix2title = args[8].split("+").join(" "); }
                if (args[9] === 'n') { mchoix2content = "" } else { mchoix2content = args[9].split("+").join(" "); }
                const { Client, MessageEmbed } = require('discord.js');
                const embedmeow = new MessageEmbed()
                    .setColor(msgcolor)
                    .setTitle(msgtitle)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png' }))
                    .setThumbnail(msgthumbnail)
                    .setImage(msgimage)
                    .addFields(
                        { name: minititre, value: msgcontent },
                        { name: '\u200B', value: '\u200B' },
                        { name: choix1title, value: mchoix1content, inline: true },
                        { name: choix2title, value: mchoix2content, inline: true },
                    )
                    .setTimestamp()
                    .setFooter(`Message écrit par ${message.author.username}`, message.author.displayAvatarURL({ format: 'png' }));
                message.channel.send(embedmeow);
                if (args[10] === '1') {
                    emote1 = "👍";
                    emote2 = "👎";
                    if (args[11] === 'n') { emote1 = "👍" } else { emote1 = args[11] }
                    if (args[12] === 'n') { emote2 = "👎" } else { emote2 = args[12] }
                    setTimeout(function () { message.channel.lastMessage.react(emote1).then(r => { message.channel.lastMessage.react(emote2); }); }, 2000);
                }
                setTimeout(function () { message.delete(); return }, 5000);
            }
        }
    }
}