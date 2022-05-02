module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "smart",
    description: "Smart",
    execute(message) {
    const giflist = ["https://tenor.com/view/feel-me-think-about-it-meme-gif-7715402"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-02-01T20:36:32.910Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)