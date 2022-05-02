module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "okboomer",
    description: "c'est quand les vieux sont vieux lol",
    execute(message) {
    const giflist = ["https://media0.giphy.com/media/PnggNmuamz7kbgfUTL/200.gif","https://media1.giphy.com/media/MbGgN7VyNBpRMNKlnx/giphy.gif","https://media2.giphy.com/media/TgIqYLicNmb56VzPmu/200.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T20:53:41.727Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)