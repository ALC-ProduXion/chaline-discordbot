module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "milk",
    description: "Du lait",
    execute(message) {
    const giflist = ["https://tenor.com/view/seb-jdg-lait-milk-explode-gif-15232512"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-27T20:26:07.021Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)