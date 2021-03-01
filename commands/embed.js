module.exports = {
    name: 'embed', //COMMANDE CREE PAR MagicTINTIN (ALC-ProdXion) : ;embed mon_titre couleurhexa lienvignette lienimage mini_titre contenu_principal choix_1 contenu_choix_1 choix_2 contenu_choix_2 choix_3 contenu_choix_3 
    description: 'Joli message',
    execute(message, args) {
        userinfo = message.author;
        memberinfo = message.guild.member(userinfo);
        if (args[0] === "help") {message.reply(`;embed **mon+titre couleurhexa lienvignette lienimage mini+titre contenu+principal choix+1** *contenu+choix+1 __choix+2__ contenu+choix+2 react emoj1 emoj2*\n> **Obligatoire** : soit une valeur soit n\n> *Facultatif*.\n> __Obligatoire__ si le paramètre du premier choix n'est pas égal à 1.\nCependant \`react\` nécessite tous les autres paramètres facultatifs !\n\nEcris comme paramètre \`n\` à chaque paramètre que tu ne veux pas définir\nUtilise + pour faire des espaces.\n\`react emoj1 emoj2\` doit être égal à 1 (n ou emoj1) (n ou emoj2) pour que le bot réagisse automatiquement avec les 2 emotes suivantes\n\nTapez\n> ;embed example\npour voir des exemples`); return}
        if (args[0] === "example") {
            const { Client, MessageEmbed } = require('discord.js');
            //----------------------------------------EXEMPLE 1
            message.channel.send(`;embed Example+1 ffff00 n n Ceci+est+un+exemple Ici+se+trouve+mon+texte n`);
            const example1 = new MessageEmbed()
            .setColor(0xffff00)
            .setTitle("Exemple 1")
            .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
            .addFields(
                { name: "Ceci est un exemple", value: "Ici se trouve mon texte" },
            )
            .setTimestamp()
            .setFooter(`Exemple demandé par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
            message.channel.send(example1);
            //----------------------------------------EXEMPLE 2
            setTimeout(function(){
                message.channel.send(`;embed Example+2 00ffff n https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg Ceci+est+un+autre+exemple Vous+pouvez+observer+une+image+à+présent Vous+aimez+? Moi+oui n`);
                const example2 = new MessageEmbed()
                .setColor(0x00ffff)
                .setTitle("Exemple 2")
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
                .setImage("https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg")
                .addFields(
                    { name: "Ceci est un autre exemple", value: "Vous pouvez observer une image à présent" },
                    { name: '\u200B', value: '\u200B' },
                    { name: "Vous aimez ?", value: "moi oui", inline: true },
                )
                .setTimestamp()
                .setFooter(`Exemple demandé par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(example2);
            }, 2000);
            //----------------------------------------EXEMPLE 3
            setTimeout(function(){
                message.channel.send(`;embed n n https://upload.wikimedia.org/wikipedia/commons/8/8a/Mobile_App_Guidelines_-_not_confusing_logos_01.png n Jamais+2+sans+3 Ici+la+couleur+est+en+auto+et+prend+la+couleur+de+votre+pseudo.+De+plus+nous+avons+défini+une+vignette. C'est+beau J'approuve Bof C'est+pas+ouf`);
                const example3 = new MessageEmbed()
                .setColor(memberinfo.displayColor)
                .setTitle("")
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/8/8a/Mobile_App_Guidelines_-_not_confusing_logos_01.png")
                .addFields(
                    { name: "Jamais 2 sans 3", value: "Ici la couleur est en auto et prend la couleur de votre pseudo. De plus nous avons défini une vignette." },
                    { name: '\u200B', value: '\u200B' },
                    { name: "C'est beau", value: "J'approuve", inline: true },
                    { name: "Bof", value: "C'est pas ouf", inline: true },
                )
                .setTimestamp()
                .setFooter(`Exemple demandé par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(example3);
            }, 4000);
            //----------------------------------------EXEMPLE 4
            setTimeout(function(){
                message.channel.send(`;embed Example+4 00ff00 n n Sondage Aimez-vous+cette+commande+? Oui clique+sur+✅ Non clique+sur+❎ 1 ✅ ❎`);
                const example4 = new MessageEmbed()
                .setColor(0x00ff00)
                .setTitle("Exemple 4")
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
                .addFields(
                    { name: "Sondage", value: "Aimez-vous cette commande ?" },
                    { name: '\u200B', value: '\u200B' },
                    { name: "Oui", value: "clique sur ✅", inline: true },
                    { name: "Non", value: "clique sur ❎", inline: true },
                )
                .setTimestamp()
                .setFooter(`Exemple demandé par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(example4);
                setTimeout(function(){message.channel.lastMessage.react("✅").then(r => {message.channel.lastMessage.react("❎");});}, 2000);
            }, 6000);
            return
        }
        //init embed
        if (args[0] === 'n') {msgtitle = ""} else {msgtitle = args[0].split("+").join(" ");} 
        if (args[1] === 'n') {msgcolor = memberinfo.displayColor} else {msgcolor = args[1]}
        if (args[2] === 'n') {msgthumbnail = ""} else {msgthumbnail = args[2]}
        if (args[3] === 'n') {msgimage = ""} else {msgimage = args[3]}
        if (args[4] === 'n') {minititre = ""} else {minititre = args[4].split("+").join(" ");}
        if (args[5] === 'n') {msgcontent = ""} else {msgcontent = args[5].split("+").join(" ");}
        //type de message choisi
            if (args[6] === 'n') {
                const { Client, MessageEmbed } = require('discord.js');
                const embedmeow = new MessageEmbed()
                .setColor(msgcolor)
                .setTitle(msgtitle)
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
                .setThumbnail(msgthumbnail)
                .setImage(msgimage)
                .addFields(
                    { name: minititre, value: msgcontent },
                )
                .setTimestamp()
                .setFooter(`Message écrit par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedmeow);
                setTimeout(function(){message.delete; return},5000);
            }
            else if (args[8] === 'n') {
                if (args[6] === 'n') {choix1title = "Choix 1"} else {choix1title = args[6].split("+").join(" ");}
                if (args[7] === 'n') {mchoix1content = ""} else {mchoix1content = args[7].split("+").join(" ");}
                const { Client, MessageEmbed } = require('discord.js');
                const embedmeow = new MessageEmbed()
                .setColor(msgcolor)
                .setTitle(msgtitle)
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
                .setThumbnail(msgthumbnail)
                .setImage(msgimage)
                .addFields(
                    { name: minititre, value: msgcontent },
                    { name: '\u200B', value: '\u200B' },
                    { name: choix1title, value: mchoix1content, inline: true },
                )
                .setTimestamp()
                .setFooter(`Message écrit par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedmeow);
                setTimeout(function(){message.delete; return},5000);
            }
            else {
                if (args[6] === 'n') {choix1title = "Choix 1"} else {choix1title = args[6].split("+").join(" ");}
                if (args[7] === 'n') {mchoix1content = ""} else {mchoix1content = args[7].split("+").join(" ");}
                if (args[8] === 'n') {choix2title = "Choix 2"} else {choix2title = args[8].split("+").join(" ");}
                if (args[9] === 'n') {mchoix2content = ""} else {mchoix2content = args[9].split("+").join(" ");}
                const { Client, MessageEmbed } = require('discord.js');
                const embedmeow = new MessageEmbed()
                .setColor(msgcolor)
                .setTitle(msgtitle)
                .setAuthor(message.author.username, message.author.displayAvatarURL({format:'png' }))
                .setThumbnail(msgthumbnail)
                .setImage(msgimage)
                .addFields(
                    { name: minititre, value: msgcontent },
                    { name: '\u200B', value: '\u200B' },
                    { name: choix1title, value: mchoix1content, inline: true },
                    { name: choix2title, value: mchoix2content, inline: true },
                )
                .setTimestamp()
                .setFooter(`Message écrit par ${message.author.username}`, message.author.displayAvatarURL({format:'png' }));
                message.channel.send(embedmeow);
                if (args[10] === '1') {
                    emote1 = "👍";
                    emote2 = "👎";
                    if (args[11] === 'n') {emote1 = "👍"} else {emote1 = args[11]}
                    if (args[12] === 'n') {emote2 = "👎"} else {emote2 = args[12]}
                    setTimeout(function(){message.channel.lastMessage.react(emote1).then(r => {message.channel.lastMessage.react(emote2);});}, 2000);
                }
                setTimeout(function(){message.delete(); return},5000);
        }
    }
}