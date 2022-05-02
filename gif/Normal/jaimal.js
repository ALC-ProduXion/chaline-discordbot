module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "jaimal",
    description: "J'ai mal",
    execute(message) {
    const giflist = ["https://tenor.com/view/didier-bourdon-acteur-realisateur-comique-comedie-gif-12510952"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-14T12:20:57.394Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)