const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');
const Canvas = require('canvas');

module.exports = {
    name: 'config',
    description: 'Configurez certains paramètres de Chaline sur votre serveur',
    execute(message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            const { client } = require("../../index.js");

            const guildcfg = message.guild;
            guildid = guildcfg.id

            if (args[0] == "read") {
                let rawcfgread = fs.readFileSync(path.resolve(`./servers/${guildcfg.id}.json`));
                let cfgread = JSON.stringify(JSON.parse(rawcfgread));
                setTimeout(function () { message.channel.send(`Voici la config actuelle :\n\`\`\`json\n ${cfgread}\`\`\``) }, 2000);
            }
            else if (args[0] == "update") {
                // Update
                previousconfig = false;
                try { // Loading previous
                    previousconfig = JSON.parse(`` + fs.readFileSync(path.resolve(`./servers/${guildid}.json`)) + ``);
                    console.log("Configuration précédente rechargée")
                } catch (err) { console.log("pas de configuration précédente à recharger"); }
                setTimeout(function () {
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
                            gifs: args[5],
                            react: args[6],
                            log: args[7],
                        }
                        const jsonStringcfg = JSON.stringify(cfgserverjson);
                        fs.writeFile(`./servers/${guildcfg.id}.json`, jsonStringcfg, err => {
                            if (err) {
                                console.log(`Error writing config of ${guildcfg.id}(${guildcfg.name})`, err)
                            } else {
                                console.log(`Successfully wrote config of ${guildcfg.id}(${guildcfg.name})`)
                            }
                        });
                        client.cfgsrvs.set(guildid, cfgserverjson);
                        message.channel.send(`Configuration mise à jour !\nVous pouvez consulter votre configuration en tapant \`;config read\``);
                    } else {
                        message.channel.send("La configuration précédente a bien été rechargée");
                        if (args[1] == "s") { lowcommandarg = previousconfig.lowcommand } else { lowcommandarg = args[1] }
                        if (args[2] == "s") { gifnarg = previousconfig.gifn } else { gifnarg = args[2] }
                        if (args[3] == "s") { gifparg = previousconfig.gifp } else { gifparg = args[3] }
                        if (args[4] == "s") { gifharg = previousconfig.gifh } else { gifharg = args[4] }
                        if (args[5] == "s") { gifsarg = previousconfig.gifs } else { gifsarg = args[5] }
                        if (args[6] == "s") { reactarg = previousconfig.react } else { reactarg = args[6] }
                        if (args[7] == "s") { logarg = previousconfig.log } else { logarg = args[7]; console.log("arg6 : " + args[6]); }
                        cfgserverjson = {
                            serverid: guildcfg.id,
                            servername: guildcfg.name,
                            servowner: guildcfg.ownerID,
                            lowcommand: lowcommandarg,
                            gifn: gifnarg,
                            gifp: gifparg,
                            gifh: gifharg,
                            gifs: gifsarg,
                            react: reactarg,
                            log: logarg,
                        }
                        console.log(cfgserverjson);
                        const jsonStringcfg = JSON.stringify(cfgserverjson);
                        fs.writeFile(`./servers/${guildcfg.id}.json`, jsonStringcfg, err => {
                            if (err) {
                                console.log(`Error writing config of ${guildcfg.id}(${guildcfg.name})`, err)
                            } else {
                                console.log(`Successfully wrote config of ${guildcfg.id}(${guildcfg.name})`)
                            }
                        })
                        client.cfgsrvs.set(guildid, cfgserverjson);
                        message.channel.send(`Configuration mise à jour !\nVous pouvez consulter votre configuration en tapant \`;config read\``);
                    }
                }, 2000);
            }
            else if (args[0] == "help" || !args[0]) {
                message.channel.send(`Tape \`;config read\` pour lire la config de ton serveur
                Tape \`;config update lowcommand gifn gifp gifh gifs react log\`
                \n> lowcommand : n (pour nobody), e (pour everyone), ou le nom d'un rôle. C'est le rôle nécessaire pour utiliser les commandes de base de Chaline
                \n> gifn : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs Normaux (plus d'infos ;gif)
                \n> gifp : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs Plus (plus d'infos ;gif)
                \n> gifh : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs Hard (plus d'infos ;gif)
                \n> gifs : n (pour nobody), e (pour everyone), ou un rôle. C'est le rôle nécessaire pour utiliser les gifs personnalisés de votre serveur (;mygif)
                \n> react : 1 ou 0. Le bot pourra réagiir à certains mots clés, c'est juste fun, rien de plus
                \n> log : n ou 0 ou #channel, n ou 0 aura pour effet de désactiver les logs de Chaline.
                \n**ATTENTION :** rôle est ici le @role
                Utilisez \`s\` comme argument pour garder le même que sur l'ancienne configuration du serveur (ne fonctionne que s'il existe déjà un fichier de configuration pour votre serveur)`)
            }
        }
    }
}
