module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "drole",
    description: "drole",
    execute(message) {
    const giflist = ["https://tenor.com/view/im-funny-the-office-laughing-kevin-malone-gif-7272294","https://tenor.com/view/anchorman-steve-carell-laugh-good-one-banana-gif-4958026","https://tenor.com/view/lol-funny-haha-laughing-laugh-gif-7699521"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:18:35.897Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)