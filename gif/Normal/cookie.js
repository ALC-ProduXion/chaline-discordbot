module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "cookie",
    description: "cookie",
    execute(message) {
    const giflist = ["https://tenor.com/view/dancing-cookie-adventure-time-gif-5334239","https://tenor.com/view/cookies-gif-14785632"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T22:00:05.965Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)