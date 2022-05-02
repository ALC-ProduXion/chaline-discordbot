module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "sale",
    description: "bah c'est sale",
    execute(message) {
    const giflist = ["https://media.tenor.com/images/c3bafc06ae65330f198d655a9b0bae70/tenor.gif","https://media.tenor.com/images/61eb8b7cfde493fa576253e0cf253a9b/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:35:36.132Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)