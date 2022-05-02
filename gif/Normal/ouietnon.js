module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ouietnon",
    description: "Oui et non",
    execute(message) {
    const giflist = ["https://k.img.mu/HmYitn.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T12:02:55.734Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)