module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "arch",
    description: "I use arch btw",
    execute(message) {
    const giflist = ["https://thumbs.gfycat.com/FlamboyantJubilantDegu-size_restricted.gif","https://tenor.com/view/i-use-arch-btw-use-arch-linux-fedora-gif-23272370"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-26T08:23:07.812Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)