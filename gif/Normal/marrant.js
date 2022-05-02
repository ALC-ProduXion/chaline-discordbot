module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "marrant",
    description: "c'est rigolo",
    execute(message) {
    const giflist = ["https://tenor.com/view/rigolo-so-funny-very-funny-trop-rigolo-marrant-gif-20384234","https://tenor.com/view/mdr-drole-marrant-rigolo-rire-gif-5029698","https://tenor.com/view/trop-drole-issou-risitas-sauce-or-loss-bitu-gif-17137293"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:23:04.012Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)