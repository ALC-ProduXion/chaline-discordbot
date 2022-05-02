module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "sus",
    description: "Among sus",
    execute(message) {
    const giflist = ["https://tenor.com/view/sus-among-us-gif-21538609"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-12-01T08:26:15.731Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)