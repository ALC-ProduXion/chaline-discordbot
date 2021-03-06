module.exports = {
    name: "commandlistnormal", 
    description: "obtenir la liste des commandes normales", 
    execute(message) {
        if (!true) {
            const fs = require('fs');
            const path = require('path');
            const Discord = require('discord.js');
            const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
            message.channel.send("Voici la liste des commandes Normales :\n")
            for (const file of cmdgifFilesn) {
                const cmdgifn = require(`./gif/Normal/${file}`);
                if (!cmdgifn.description) {message.channel.send(`${cmdgifn.name}`);}
                else {message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`);}
            }
        }
    }
}