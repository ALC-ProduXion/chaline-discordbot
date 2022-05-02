const fs = require('fs');
const path = require('path');
const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");

module.exports = {
    name: 'mygif',
    description: 'Affiche des infos sur les commandes personnalisées',
    execute(message) {
        const { client, botchannels } = require("../../index.js");

        servgifdir = `./gif/servers/${message.guild.id}`;
        actualdate = new Date();
        validiteconfiggifs = configgifs;
        try {
            // first check if directory already exists
            if (!fs.existsSync(servgifdir)) {
                fs.mkdirSync(servgifdir);
                logger.all(`./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                client.channels.cache.get(botchannels.gifServerLogChannel).send(`**NEW :** ./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                elgibilitysrv = {
                    elgibility: 1,
                    datedelivering: actualdate
                }
                const jsonStringcfg = JSON.stringify(elgibilitysrv);
                fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                    if (err) {
                        logger.all(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                        client.channels.cache.get(botchannels.gifServerLogChannel).send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                        message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-MYGIF-CRWREL-1-MAIN\`")
                    } else {
                        logger.all(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                        client.channels.cache.get(botchannels.gifServerLogChannel).send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                        try {//---------------------------loading previous
                            eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                            logger.all("Eligibilité chargée")
                        } catch (err) { logger.all("! ERREUR : pas d'Eligibilité chargée"); }
                        setTimeout(function () {
                            if (devlist.includes(message.author.id)) {
                                message.reply(`Vous êtes contributeur de gif, vous avez donc accès à tous les gifs de toutes les catégories sur tous les serveurs où Chaline se trouve. Les commandes de gif commencent par ",".\nEn tant que contributeur vous avez accès aux commandes personnalisées de tous les serveurs :
                                > \`;g idserver gifname\` pour utiliser le gifname personnalisé du serveur choisi.`)
                            } else {
                                message.channel.send(`Ce bot est doté d'un système de commandes de gif personnalisés par serveur, vous permettant de mieux exprimer vos émotions.\nPour utiliser les commandes gifs, l(es) administrateur(s) de vore serveur doit vous avoir activé l'accès (;config help) et doit avoir créé des commandes personnalisées\nSi c'est le cas, il vous suffit de taper "," suivi d'un nom de commande.`);
                                message.channel.send(`Par exemple vous pouvez dire \`,bonjour\`. (même principe que les ;gif de Chaline)`)
                            }
                            if (message.member.hasPermission("ADMINISTRATOR")) {
                                gifindic = `Comme vous êtes admin du serveur, pour régler qui a accès aux commandes de gif il vous suffit d'utiliser la commande \`;config help\`.
Vous pouvez configurer un rôle qui sera nécessaire pour utiliser ces gifs personnalisés.
                    
Pour ajouter des des gifs personnallisés, il vout suffit d'effectuer la commande \`;newgif lenomdugif liendugif1.gif liendudeuxièmegif.gif ...\`
Si vous souhaitez supprimer un gif personnalisé, effectuez la commande \`;delgif lenomdugif\` (Attention la suppression est définitive les données seront perdues)
Tapez \`,commandlistserver\` pour obtenir la liste des commandes de votre serveur.`
                                if (!eligibilityread) {
                                    gifindic += "Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-MYGIF-CRREEL-1-MAIN\`"
                                } else {
                                    if (eligibilityread.elgibility == 1) {
                                        if (!confserv) {
                                            gifindic += `\n\nActuellement, personne ne peut utiliser les commandes de gif de ce serveur`
                                        } else {
                                            gifindic += "\n\nActuellement, "
                                            if (validiteconfiggifs == "e") { gifindic += "tout le monde a" } else if (validiteconfiggifs == "n") { gifindic += "personne n'a"; } else { rolegifs = message.guild.roles.cache.get(validiteconfiggifs.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifs.name}\`` }
                                            gifindic += " accès aux commandes de gif personnalisés du serveur."
                                        }
                                    } else { gifindic += `\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\`` }
                                }
                                message.reply(gifindic)
                            }
                        }, 500);
                    }
                })
            } else {
                logger.all("(folder already exists) ;mygif use on " + message.guild.name);
                fs.stat(`${servgifdir}/settings${message.guild.id}.json`, function (err, stat) {
                    if (err == null) {
                        try {//---------------------------loading previous
                            eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                            logger.all("Eligibilité chargée")
                        } catch (err) { logger.all("! ERREUR : pas d'Eligibilité chargée"); }
                        setTimeout(function () {
                            if (devlist.includes(message.author.id)) {
                                message.reply(`Vous êtes contributeur de gif, vous avez donc accès à tous les gifs de toutes les catégories sur tous les serveurs où Chaline se trouve. Les commandes de gif commencent par ",".\nEn tant que contributeur vous avez accès aux commandes personnalisées de tous les serveurs :
                                > \`;g idserver gifname\` pour utiliser le gifname personnalisé du serveur choisi.`)
                            } else {
                                message.channel.send(`Ce bot est doté d'un système de commandes de gif personnalisés par serveur, vous permettant de mieux exprimer vos émotions.\nPour utiliser les commandes gifs, l(es) administrateur(s) de vore serveur doit vous avoir activé l'accès (;config help) et doit avoir créé des commandes personnalisées\nSi c'est le cas, il vous suffit de taper "," suivi d'un nom de commande.`);
                                message.channel.send(`Par exemple vous pouvez dire \`,bonjour\`. (même principe que les ;gif de Chaline)`)
                            }
                            if (message.member.hasPermission("ADMINISTRATOR")) {
                                gifindic = `Comme vous êtes admin du serveur, pour régler qui a accès aux commandes de gif il vous suffit d'utiliser la commande \`;config help\`.
Vous pouvez configurer un rôle qui sera nécessaire pour utiliser ces gifs personnalisés.
                    
Pour ajouter des des gifs personnallisés, il vout suffit d'effectuer la commande \`;newgif lenomdugif liendugif1.gif liendudeuxièmegif.gif ...\`
Si vous souhaitez supprimer un gif personnalisé, effectuez la commande \`;delgif lenomdugif\` (Attention la suppression est définitive les données seront perdues)
Tapez \`,commandlistserver\` pour obtenir la liste des commandes de votre serveur.`
                                if (!eligibilityread) {
                                    gifindic += "Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-MYGIF-EXREEL-1-MAIN\`"
                                } else {
                                    if (eligibilityread.elgibility == 1) {
                                        if (!confserv) {
                                            gifindic += `\n\nActuellement, personne ne peut utiliser les commandes de gif de ce serveur`
                                        } else {
                                            gifindic += "\n\nActuellement, "
                                            if (configgifs == "e") { gifindic += "tout le monde a" } else if (configgifs == "n") { gifindic += "personne n'a" } else { rolegifs = message.guild.roles.cache.get(configgifs.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifs.name}\`` }
                                            gifindic += " accès aux commandes de gif personnalisés du serveur."
                                        }
                                    } else { gifindic += `\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\`` }
                                }
                                message.reply(gifindic)
                            }
                        }, 500);
                    } else if (err.code === 'ENOENT') {
                        elgibilitysrv = {
                            elgibility: 1,
                            datedelivering: actualdate
                        }
                        const jsonStringcfg = JSON.stringify(elgibilitysrv);
                        fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                            if (err) {
                                logger.all(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                                client.channels.cache.get(botchannels.gifServerLogChannel).send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                                message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-MYGIF-EXWREL-1-MAIN\`")
                            } else {
                                logger.all(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                client.channels.cache.get(botchannels.gifServerLogChannel).send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                message.reply("Mise à jour de l'égibilité du serveur en cours, veuillez réessayer, si le problème persiste signalez l'erreur en indiquant ce que vous souhaitiez faire \`;error l'erreur\`\nErreur : \`CMD-MYGIF-VEWREL-1-MAIN\`")
                            }
                        })
                    } else {
                        logger.all('Some other error: ', err.code);
                    }
                });
            }
        } catch (err) {
            logger.all(err);
        }
    }
}