
module.exports = {
    name: 'config',
    description: 'Configurez certains paramètres de Chaline sur votre serveur',
    execute(message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            //-----------------------------------------------------------INIT
            const fs = require('fs');
            const Discord = require('discord.js');
            const path = require('path');
            const Canvas = require('canvas');
            const guildcfg = message.guild
            console.log(guildcfg.id);
            //----------------------------------------------------------ARGS
            if (args[0] === "read") {
                let rawcfgread = fs.readFileSync(path.resolve(`./servers/${guildcfg.id}.json`));
                let cfgread = JSON.stringify(JSON.parse(rawcfgread));
                setTimeout(function(){message.channel.send(`Voici la config actuelle :\n\`\`\`json\n ${cfgread}\`\`\``)},2000);
            }
            else if (args[0] === "update") { 
                //--------------------------------------update
                    previousconfig = false;
                    try {//---------------------------loading previous
                        previousconfig = JSON.parse(``+fs.readFileSync(path.resolve(`./servers/${guildid}.json`))+``);
                        console.log("Configuration précédente rechargée")
                    } catch(err) {console.log("pas de configuration précédente à recharger"); }
                    setTimeout(function(){
                        if (!previousconfig) {
                            message.channel.send("Il n'y a pas de configuration précédente a recharger");
                            cfgserverjson = {
                                serverid: guildcfg.id,
                                servername: guildcfg.name,
                                servowner: guildcfg.ownerID,
                                lowcommand: args[1],
                                gifn: args[2],
                                gifp: args[3],
                                gifh: args[4],
                                react: args[5],
                                log: args[6], 
                            }
                            const jsonStringcfg = JSON.stringify(cfgserverjson);
                            fs.writeFile(`./servers/${guildcfg.id}.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing config of ${guildcfg.id}(${guildcfg.name})`, err)
                                } else {
                                    console.log(`Successfully wrote config of ${guildcfg.id}(${guildcfg.name})`)
                                }
                            })
                            message.channel.send(`Configuration mise à jour !\nVérifiez votre configuration en tapant \`;config read\`
                            \nPour valider votre configuration et la recharger tapez \`;config reload\``)
                        } else {
                            message.channel.send("La configuration précédente a bien été rechargée");
                            if (args[1] == "s") {lowcommandarg = previousconfig.lowcommand} else {lowcommandarg = args[1]}
                            if (args[2] == "s") {gifnarg = previousconfig.gifn} else {gifnarg = args[2]}
                            if (args[3] == "s") {gifparg = previousconfig.gifp} else {gifparg = args[3]}
                            if (args[4] == "s") {gifharg = previousconfig.gifh} else {gifharg = args[4]}
                            if (args[5] == "s") {reactarg = previousconfig.react} else {reactarg = args[5]}
                            if (args[6] == "s") {logarg = previousconfig.log} else {logarg = args[6]; console.log("arg6 : "+args[6]);}
                            cfgserverjson = {
                                serverid: guildcfg.id,
                                servername: guildcfg.name,
                                servowner: guildcfg.ownerID,
                                lowcommand: lowcommandarg,
                                gifn: gifnarg,
                                gifp: gifparg,
                                gifh: gifharg,
                                react: reactarg,
                                log: logarg, 
                            }
                            const jsonStringcfg = JSON.stringify(cfgserverjson);
                            fs.writeFile(`./servers/${guildcfg.id}.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing config of ${guildcfg.id}(${guildcfg.name})`, err)
                                } else {
                                    console.log(`Successfully wrote config of ${guildcfg.id}(${guildcfg.name})`)
                                }
                            })
                            message.channel.send(`Configuration mise à jour !\nVérifiez votre configuration en tapant \`;config read\`
                            \nPour valider votre configuration et la recharger tapez \`;config reload\``)
                        }
                    },2000);
            }
            else if (args[0] === "help") {
                message.reply(`Tape \`;config read\` pour lire la config de ton serveur\nTape \`;config update lowcommand gifn gifp gifh react log\`
                \n> lowcommand : n (pour nobody), e (pour everyone), ou le nom d'un rôle. C'est le rôle nécessaire pour utiliser les commandes de base de Chaline
                \n> gifn : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs Normaux
                \n> gifp : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs Plus
                \n> gifh : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs Hard
                \n> react : 1 ou 0. Le bot pourra réagiir à certains mots clés, c'est juste fun, rien de plus
                \n> log : 1 ou 0. Rendre vos logs publics
                \n**ATTENTION :** rôle est ici le @role
                Utilisez \`s\` comme argument pour garder le même que sur l'ancienne configuration du serveur (ne fondtionne que s'il existe déjà un fichier de configuration pour votre serveur)`)
            }
        }
    }
}
