module.exports = {
    name: 'about',
    description: 'Plus d\'infos sur Chaline',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embedmeow = new MessageEmbed()
        .setTitle('Plus d\'infos sur le bot Chaline')
        .setColor(0xffffff)
        .setDescription('Pour plus d\'infos sur moi, vous pouvez visiter notre serveur, qui propose aussi les logs de serveurs qui souhaitent les rendre publics https://discord.gg/jfUqQcP88K\nVous y trouverez notamment la liste des gif disponnibles que je propose ainsi que les liens pour pouvoir m\'installer sur votre serveur.\nEn cas de problème, n\'hésitez pas à contacter mon développeur **MagicTINTIN#4389**\n\n*Pensez à mettre le serveur en muet quand vous arrivez ;)*');
        message.channel.send(embedmeow);
    }
}