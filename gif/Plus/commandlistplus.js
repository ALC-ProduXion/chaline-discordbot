module.exports = {
    name: "commandlistplus", 
    description: "obtenir la liste des commandes Plus", 
    execute(message) {
        if (!true) {
            const fs = require('fs');
            const path = require('path');
            const Discord = require('discord.js');
            const cmdgifFilesn = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
            message.channel.send("Voici la liste des commandes Plus :\n")
            for (const file of cmdgifFilesn) {
                const cmdgifn = require(`./gif/Plus/${file}`);
                if (!cmdgifn.description) {message.channel.send(`${cmdgifn.name}`);}
                else {message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`);}
            }
        }
    }
}