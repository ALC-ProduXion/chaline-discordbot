module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "cdrole",
    description: "c'est drôle ? ça s'appelle de l'humour",
    execute(message) {
    const giflist = ["https://tenor.com/view/kaamelott-arthur-humour-blague-lol-gif-18229421","https://tenor.com/view/seb57-rire-drole-sourire-marrant-gif-15842018","https://tenor.com/view/funny-smile-best-laugh-thats-funny-gif-8282901"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:11:49.998Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)