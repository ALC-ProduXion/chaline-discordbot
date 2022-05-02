module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "super",
    description: "c'est cool non ?",
    execute(message) {
    const giflist = ["https://tenor.com/view/-gif-4320543","https://tenor.com/view/simon-cowell-two-thumbs-up-bravo-nice-happy-gif-8782543","https://tenor.com/view/great-gif-4402459"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:00:18.346Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)