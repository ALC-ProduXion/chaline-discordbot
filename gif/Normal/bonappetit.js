module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "bonappetit",
    description: "bon app",
    execute(message) {
    const giflist = ["https://tenor.com/view/cat-fat-cat-bread-cat-bread-fat-cat-bread-gif-21923636"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-10-23T17:13:30.468Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)