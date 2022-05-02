module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ditesmenplus",
    description: "Dites m'en plus ! (Nexus VI)",
    execute(message) {
    const giflist = ["https://media.giphy.com/media/l0IycDc9XIZuU1nDW/giphy.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-10-05T19:37:26.894Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)