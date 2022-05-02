const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'gif',
    description: 'Avoir des infos sur les gifs',
    execute(message) {
        const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
        const cmdgifFilesp = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
        const cmdgifFilesh = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));

        totalnumofcmdgif = cmdgifFilesn.length + cmdgifFilesp.length + cmdgifFilesh.length;

        if (devlist.includes(message.author.id)) {
            message.reply(`Vous êtes contributeur de gif, vous avez donc accès à tous les gifs de toutes les catégories sur tous les serveurs où Chaline se trouve. Les commandes de gif commencent par ",".\nEn tant que contributeur vous avez accès aux commandes suivantes :
            > \`;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif\` pour ajouter des gifs,
            > \`;remgif gifname reason\` pour supprimer des gifs,
            > \`;relgif\` pour reload les gifs du bot manuellement (dépannage),
            > \`;suggest message\` pour suggérer du contenu/fonctionnalités aux développeurs du bot`)
        } else {
            message.channel.send(`Ce bot est doté d'un système de commandes de gif, vous permettant de mieux exprimer vos émotions.\nPour utiliser les commandes gifs, l'administrateur de vore serveur doit vous avoir activé l'accès (;config help)\nSi c'est le cas, il vous suffit de taper "," suivi d'un nom de commande.\nIl en existe beaucoup, mais s'il en manque vous pouvez en profiter pour \`;suggest idée de gif, avec exemples\``);
            message.channel.send(`Par exemple vous pouvez dire \`,bonjour\`.\nUne liste est régulièrement mise à jour sur \`https://discord.gg/jfUqQcP88K\` dans les salons cmd-gif-\\* (ATTENTION : Ce serveur est en lecture seule et est un serveur de logs, nous vous conseillons de le mettre en **muet**)`, joinsrvbtn)
        }
        if (message.member.hasPermission("ADMINISTRATOR")) {
            gifindic = `Comme vous êtes admin du serveur, pour régler qui a accès aux commandes de gif il vous suffit d'utiliser la commande \`;config help\`.
Pour pouvoir utiliser les commandes de gif, il faudra créer sur votre serveur 4 rôles si vous souhaitez autoriser uniquement certaines personnes à utiliser certains types de gif.
Ceci est un exemple : 
- GifN : pour avoir les gifs normaux *(Normal)*
- GifP : pour avoir un contenu plus vaste mais moins family-friendly *(Plus)*
- GifH : pour avoir des gif un peu trash et un peu plus violents (Ne soyez pas méchants avec, c'est juste pour s'amuser ^^) *(Hard)*
- GifS : pour avoir des gif spécifiques à votre serveur ajoutés par les admins du serveur (voir \`;mygif\`) *(Server)*`
            if (!confserv) {
                gifindic += `\n\nActuellement, personne ne peut effectuer de commande de gif sur ce serveur`
            }
            else if (configgifn == "e" && configgifp == "e" && configgifh == "e" && configgifs == "e") {
                gifindic += `\n\nActuellement, tout le monde a accès à toutes les commandes de gif sur ce serveur`
            } else {
                gifindic += "\n\nActuellement, "
                if (configgifn == "e") { gifindic += "tout le monde a" } else if (configgifn == "n") { gifindic += "personne n'a" } else { rolegifn = message.guild.roles.cache.get(configgifn.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifn.name}\`` }
                gifindic += " accès aux commandes de gif normales de Chaline,\n"
                if (configgifp == "e") { gifindic += "tout le monde a" } else if (configgifp == "n") { gifindic += "personne n'a" } else { rolegifp = message.guild.roles.cache.get(configgifp.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifp.name}\`` }
                gifindic += " accès aux commandes de gif plus de Chaline,\n"
                if (configgifh == "e") { gifindic += "tout le monde a" } else if (configgifh == "n") { gifindic += "personne n'a" } else { rolegifh = message.guild.roles.cache.get(configgifh.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifh.name}\`` }
                gifindic += " accès aux commandes de gif hard de Chaline,\n"
                if (configgifs == "e") { gifindic += "tout le monde a" } else if (configgifs == "n") { gifindic += "personne n'a" } else { rolegifs = message.guild.roles.cache.get(configgifs.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifs.name}\`` }
                gifindic += " accès aux commandes de gif personnalisées du serveur."
            }
            gifindic += `\n\nIl y a actuellement ${totalnumofcmdgif} commandes disponibles !`
            message.reply(gifindic)
        }
    }
}