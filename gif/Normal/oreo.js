module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "oreo",
    description: "oreo",
    execute(message) {
    const giflist = ["https://tenor.com/view/minaoreo-oreo-giant-milk-gif-15755556"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T22:00:28.309Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)