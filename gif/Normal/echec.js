module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "echec",
    description: "Ce n'est pas un échec...",
    execute(message) {
    const giflist = ["https://tenor.com/view/macron-%C3%A9chec-covid-gif-18805773"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-10-05T19:28:37.173Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)