module.exports = {
    name: "commandlisthard", 
    description: "obtenir la liste des commandes Hard", 
    execute(message) {
        if (!true) {
            const fs = require('fs');
            const path = require('path');
            const Discord = require('discord.js');
            const cmdgifFilesn = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));
            message.channel.send("Voici la liste des commandes Hard :\n")
            for (const file of cmdgifFilesn) {
                const cmdgifn = require(`./gif/Hard/${file}`);
                if (!cmdgifn.description) {message.channel.send(`${cmdgifn.name}`);}
                else {message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`);}
            }
        }
    }
}