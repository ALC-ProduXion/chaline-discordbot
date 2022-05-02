module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "bescherelle",
    description: "Ah le français…",
    execute(message) {
    const giflist = ["https://tenor.com/view/bescherelle-orthographe-gif-15543456"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-01T08:11:26.387Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)