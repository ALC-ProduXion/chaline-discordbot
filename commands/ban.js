module.exports = {
    name: 'ban',
    description: 'Ban quelqu\'un',
    execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (message.mentions.users.first()) {
                try {
                    let reasonban = args.slice(1).join(' ');
                    const usertoban = message.mentions.users.first();
                    const membertoban = message.guild.members.resolve(usertoban);
                    if (membertoban) {
                        const Discordban = require('discord.js');
                        const clientban = new Discordban.Client();
                        const serverlog = clientban.guilds.cache.get('814097749603254303');
                        message.reply(`Souhaitez-vous vraiment bannir ${membertoban}.\n`
                            + 'Confirme avec ✔ ou annule avec ❌.\nS\'il n\'y a pas de réaction d\'ici 30 secondes, le ban sera annulé');

                        // Reacts so the user only have to click the emojis
                        message.react('✔').then(r => {message.react('❌');});

                        message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '✔' || reaction.emoji.name == '❌'),
                                { max: 1, time: 30000 }).then(collected => {
                                        if (collected.first().emoji.name == '✔') {
                                            if (reasonban === "") {reasonban = "le bien du serveur";}
                                            membertoban.ban({ days:7,reason:`par ${message.author.tag} pour ${reasonban}`});
                                            message.reply(`${membertoban} a bien été banni du serveur (pour ${reasonban})`);
                                            console.log()
                                            console.log(`${membertoban} (${membertoban.tag}) a été banni par ${message.author.tag} pour ${reasonban} sur ${message.guild.name}`);
                                            return `${membertoban} (${usertoban.tag}) a été banni par ${message.author.tag} pour ${reasonban} sur ${message.guild.name}`;
                                        }
                                        else {
                                            message.reply('Bannissement annulé.');
                                            console.log(`La procédure de bannissement de ${membertoban} (${usertoban.tag}) a été annulée par ${message.author.tag} sur ${message.guild.name}`);
                                            logback = `La procédure de bannissement de ${membertoban} (${usertoban.tag}) a été annulée par ${message.author.tag} sur ${message.guild.name}`;
                                            console.log(logback);
                                            return logback;
                                        }
                                }).catch((error) => {
                                        console.log(`La procédure de bannissement de ${membertoban} (${usertoban.tag}) a été annulée par ${message.author.tag} sur ${message.guild.name}`);
                                        message.reply("Bannissement annulé.");
                                        return `La procédure de bannissement de ${membertoban} (${usertoban.tag}) a été annulée par ${message.author.tag} sur ${message.guild.name}`;
                                });
                    } else {message.reply(`Cette personne n'est pas sur le serveur`);}
                } catch (error) {
                    console.error(error);
                    message.reply(`Je n'ai pas les droits pour bannir ${membertoban}`);
                }
            } else {
                message.reply(`Tu n'as choisi personne à bannir`);
            }
        } else {message.reply(`Tu n'as pas le droit de bannir qui que ce soit ici !`);}
    }
}




