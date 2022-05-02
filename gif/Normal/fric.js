module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "fric",
    description: "Ouep on aime ça",
    execute(message) {
    const giflist = ["https://media.melty.fr/article-4228336-raw/media.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T22:39:58.480Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)