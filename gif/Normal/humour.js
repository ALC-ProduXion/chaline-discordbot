module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "humour",
    description: "c'est de l'humour",
    execute(message) {
    const giflist = ["https://tenor.com/view/kaa-kaamelott-gauvain-humour-gif-8934010","https://tenor.com/view/vandame-gif-19220005","https://tenor.com/view/star-trek-data-humour-brent-spiner-gif-16866801"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:04:02.073Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)