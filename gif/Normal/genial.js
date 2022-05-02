module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "genial",
    description: "Mais c'est génial !",
    execute(message) {
    const giflist = ["https://media1.tenor.com/images/4b8a19d6e3afec27f735612c08a1fc3d/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T11:05:23.790Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)