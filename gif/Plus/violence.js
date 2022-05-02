module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "violence",
    description: "La violence n'est pas une solution.",
    execute(message) {
    const giflist = ["https://tenor.com/view/solution-violence-jdg-joueur-du-gif-19997720"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-10-31T14:14:52.630Z depuis le channel send(819302369237532742) sur le serveur Chaline(814097749603254303)