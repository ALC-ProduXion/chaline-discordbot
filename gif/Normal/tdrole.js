module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "tdrole",
    description: "tu es drôle titouan",
    execute(message) {
    const giflist = ["https://tenor.com/view/adele-laugh-laughing-mdr-gif-5029702","https://tenor.com/view/lol-laugh-giggle-laugh-out-loud-funny-gif-5710539","https://tenor.com/view/issou-drole-marrant-rire-rigoler-gif-6142114"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:13:29.028Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)