module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "nulachier",
    description: "Nul à chier",
    execute(message) {
    const giflist = ["https://tenor.com/view/jdg-joueur-joueur-du-grenier-nul-nul-a-chier-gif-17332131"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-01-31T17:21:22.424Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)