module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "vaccin",
    description: "Nano puces 5G ptdr du futuuuur",
    execute(message) {
    const giflist = ["https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/03/5g-page-reverse-2019.gif","https://imgur.com/BaOG0vz"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-10T08:52:40.378Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)