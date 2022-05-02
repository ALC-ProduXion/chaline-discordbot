const fs = require('fs');
const path = require('path');
const logger = require("../../functions/logger.js");

module.exports = {
    name: 'autoanswer',
    description: 'Répondeur automatique pour quand vous êtes afk',
    execute(message, args) {
        const { client, botchannels } = require("../../index.js");

        try {
            let afkwhitelist = args[0];

            // HELP
            if ((!afkwhitelist == "stop" && !args[1]) || !afkwhitelist || afkwhitelist == "?" || afkwhitelist == "help") {
                return message.reply(`Voici la santaxe de la commande :
            > \`;autoanswer id1+id2+id3 Message pour les autres.\`
Lorsque quelqu'un (qui n'est pas parmis les id que vous avez rentré (ici id1 id2 et id3) vous mentionne dans le chat mais que vous êtes occupé,
Le bot répondra automatiquement au message par le message que vous aurez entré (ici : "Message pour les autres.") sur tous les serveurs où se trouve Chaline
Si vous souhaitez que le message soit distribué à quiconque vous mentionnant, remplacez id1... par n
Pour supprimer le message automatique tappez \`;autoanswer stop\`

Fonctionnalité avancée : \`;autoanswer adv id1+id2+id3 idserveur1 Message pour le serveur 1 | idserveur2 Message pour serveur 2 | all Message pour les autres.\`
Attention ! l'argument all concernera tous les autres serveurs où se trouve Chaline, il est facultatif, mais doit toujours se trouver à la fin de la liste comme présenté.`)
            }

            // STOP
            else if (afkwhitelist == "stop") {
                if (!listafk[message.author.id]) {
                    message.reply("Vous n'aviez pas de répondeur automatique défini.")
                } else {
                    delete listafk[message.author.id]
                    const jsonStringcfg = JSON.stringify(listafk);
                    fs.writeFile(`./config/afk.json`, jsonStringcfg, err => {
                        if (err) {
                            logger.all(`Error saving afk`, err)
                        } else {
                            logger.all(`Successful saved afk`)
                        }
                    })
                    message.reply("Votre répondeur automatique à bien été supprimé.")
                }
            }

            // Advanced version of autoanswer
            else if (afkwhitelist == "adv") {
                args.shift()
                args.shift()
                argadv = args.join(" ")
                afksettingsconf = argadv.split(/\|+/);

                // show the new config to the user
                if (!afksettingsconf[0]) return message.reply("Une erreur s'est produite veuillez vérifier le nombre d'arguments. Si l'erreur ne vient pas de vous signalez l'erreur en indiquant ce que vous souhaitiez faire `;error l'erreur`\nErreur : `CMD-AFK-ADV-1-MAIN")
                messageconfirmationafk = "Message de répondeur automatique multiple défini : "
                for (let afkmsgservn = 0; afkmsgservn < afksettingsconf.length; afkmsgservn++) {
                    srvafkmsg = afksettingsconf[afkmsgservn].split(/ +/);
                    if (srvafkmsg[0] == "") srvafkmsg.shift()

                    if (srvafkmsg[0] == "all") {
                        srvafkmsg.shift()
                        messageonsrvafk = srvafkmsg.join(" ")
                        messageconfirmationafk += `\n"${messageonsrvafk}" pour les autres serveurs`
                    } else {
                        servconfafk = srvafkmsg[0]
                        srvafkmsg.shift()
                        messageonsrvafk = srvafkmsg.join(" ")
                        messageconfirmationafk += `\n"${messageonsrvafk}" pour le serveur ${servconfafk}`
                    }
                }
                // writing down new afk.json
                listafk[message.author.id] = message.content.slice(12)
                const jsonStringcfg = JSON.stringify(listafk);
                fs.writeFile(`./config/afk.json`, jsonStringcfg, err => {
                    if (err) {
                        logger.all(`Error saving afk`, err)
                    } else {
                        logger.all(`Successful saved afk`)
                    }
                })
                message.reply(messageconfirmationafk)
            }

            // Classic & general version of the autoanswer
            else {
                args.shift()
                messagerepondeur = args.join(" ");
                // show the new config to the user
                message.reply("Message de répondeur automatique défini sur \"" + messagerepondeur + "\"");
                // writing down new afk.json
                listafk[message.author.id] = message.content.slice(12)
                const jsonStringcfg = JSON.stringify(listafk);
                fs.writeFile(`./config/afk.json`, jsonStringcfg, err => {
                    if (err) {
                        logger.all(`Error saving afk`, err)
                    } else {
                        logger.all(`Successful saved afk`)
                    }
                });
            }
        } catch (err) { console.error(err); }
    }
}