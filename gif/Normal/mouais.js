module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "mouais",
    description: "mmmhhh ouais...",
    execute(message) {
    const giflist = ["https://media1.tenor.com/images/f9746d4112e8b366ea921803bb8c8604/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T10:56:24.981Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)