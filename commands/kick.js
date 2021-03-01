
module.exports = {
    name: 'kick',
    description: 'Kick quelqu\'un',
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (message.mentions.users.first()) {
                try {
                    let reasonkick = args.slice(1).join(' ');
                    const usertokick = message.mentions.users.first();
                    const membertokick = message.guild.members.resolve(usertokick);
                    if (membertokick) {
                        if (reasonkick === "") {reasonkick = "le bien du serveur";}
                        membertokick.kick(`par ${message.author.tag} pour ${reasonkick}`);
                        message.reply(`${membertokick} a bien été expulsé du serveur (pour ${reasonkick})`);
                        logback = `${membertokick} (${usertokick.tag}) a été expulsé par ${message.author.tag} du serveur (pour ${reasonkick})`;
                        console.log(logback)
                        return logback;
                    } else {message.reply(`Cette personne n'est pas sur le serveur`);}
                } catch (error) {
                    console.error(error);
                    message.reply(`Je n'ai pas les droits pour expulser ${membertokick}`);
                }
            } else {
                message.reply(`Tu n'as choisi personne à expulser`);
            }
        } else {message.reply(`Tu n'as pas le droit d'expulser qui que ce soit ici !`);}
    }
}




