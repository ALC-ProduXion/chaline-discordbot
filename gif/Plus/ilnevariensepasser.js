module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ilnevariensepasser",
    description: "Non non, vraiment",
    execute(message) {
    const giflist = ["https://giphy.com/gifs/ui1hpJSyBDWlG"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T10:39:02.782Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)