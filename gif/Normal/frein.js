module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "frein",
    description: "Jean Lassale freinant en 4L `https://www.youtube.com/watch?v=RVJZnpQA9m4`",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/704725540170367036/920012055598202880/freinjeanlassale.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-12-13T18:00:27.761Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)