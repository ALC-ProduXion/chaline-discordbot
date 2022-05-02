module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "nexusvi",
    description: "La meilleure chaine de sf",
    execute(message) {
    const giflist = ["https://rednugget.fr/wp-content/uploads/2017/12/Intro_NexusVI.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-10T09:14:00.981Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)