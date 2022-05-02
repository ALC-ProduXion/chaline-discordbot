module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ahdaccord",
    description: "Ah d'accord !",
    execute(message) {
    const giflist = ["https://tenor.com/view/ah-daccord-jamy-jamy-gourmaud-jamy-ah-daccord-compris-gif-21202343"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-01-22T15:04:17.848Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)