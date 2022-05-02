module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "bovis",
    description: "Oui je ressens les flux quantiques",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/720970045932437556/874968014834008064/secte.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T10:51:42.643Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)