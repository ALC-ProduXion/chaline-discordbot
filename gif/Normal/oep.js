module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "oep",
    description: "Ouep raccourci",
    execute(message) {
    const giflist = ["https://media1.tenor.com/images/67cd1f9b12d4cba648306dc3e259191e/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T12:01:37.228Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)