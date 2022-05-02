module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "cmarrant",
    description: "c'est marrant d'Orelsan",
    execute(message) {
    const giflist = ["https://tenor.com/view/orelsan-ah-c-est-marrant-wbp-meme-gif-13620409"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:24:28.361Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)