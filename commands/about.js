module.exports = {
    name: 'about',
    description: 'Plus d\'infos sur Chaline',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embedmeow = new MessageEmbed()
        .setTitle('Plus d\'infos sur le bot Chaline')
        .setColor(0xffffff)
        .setURL('https://github.com/ALC-ProduXion/chaline-discordbot')
        .setImage('https://repository-images.githubusercontent.com/341698258/a72f3d00-76d3-11eb-8bb2-46391454be08')
        .setDescription('Pour plus d\'infos sur moi, vous pouvez visiter notre serveur, qui propose aussi les logs de serveurs qui souhaitent les rendre publics https://discord.gg/jfUqQcP88K\nVous y trouverez notamment la liste des gif disponnibles que je propose ainsi que les liens pour pouvoir m\'installer sur votre serveur.\nEn cas de problème ou pour des suggestions, n\'hésitez pas à contacter mon développeur **MagicTINTIN#4389**, ou mes principaux contributeurs **clem6528#7666** et **Paria12#1246**\n\n*Pensez à mettre le serveur en muet quand vous arrivez ;)*');
        message.channel.send(embedmeow);
    }
}