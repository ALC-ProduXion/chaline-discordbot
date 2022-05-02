const logger = require("../../functions/logger.js");
const init = require("../../functions/init.js");
const triggerload = require("../../functions/triggerload.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'g',
    description: 'Gif perso n\'importe où',
    execute(message, args) {
        const { client, botchannels } = require("../../index.js");

        // envoyer un gif personnalisé d'un serveur spécifique n'importe où
        if (devlist.includes(message.author.id) && args[1]) {
            try {
                servergifid = args[0].toLowerCase();
                cmdgif = args[1].toLowerCase();
                argif = args[2]
                if (cmdgif === "commandlistserver") {
                    const cmdgifFilesn = fs.readdirSync(`./gif/servers/${servergifid}/`).filter(file => file.endsWith('.js'));
                    message.channel.send("Voici la liste des commandes du serveur :\n")
                    for (const file of cmdgifFilesn) {
                        const cmdgifs = require(`../../gif/servers/${servergifid}/${file}`);
                        if (!cmdgifs.description) { message.channel.send(`${cmdgifs.name}`); }
                        else { message.channel.send(`${cmdgifs.name} : *${cmdgifs.description}*`); }
                    }
                } else if (eval(`client.cmdgifss.s${servergifid}`) && eval(`client.cmdgifss.s${servergifid}.has(cmdgif)`) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifs) || configgifs === "e" || whitelist.includes(message.author.id))) {//--------------------------------------------------------SERV GIF
                    try {
                        eval(`client.cmdgifss.s${servergifid}.get(cmdgif).execute(message, argif)`)
                        client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` du serveur ${servergifid} sur **${message.guild.name}** dans *#${message.channel.name}*(${message.channel.id}) dans la catégrorie *${message.channel.parentID}*`);
                    } catch (error) {
                        console.error(error);
                        message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`\nErreur : \`CMD-GDEV-0-0-G\`");
                    }
                }
            } catch (error) { console.error(error); }
        }
    }
}