module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "medecin",
    description: "Vite ! Un médecin !",
    execute(message) {
    const giflist = ["https://tenor.com/view/hamzoz-monkey-hurry-rush-emergency-gif-16349015"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-12-26T17:17:03.820Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)