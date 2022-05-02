module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "rickornichon",
    description: "rick en cornichon",
    execute(message) {
    const giflist = ["https://tenor.com/view/rick-and-morty-pickle-rrick-gif-9104707"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T20:44:23.680Z depuis le channel idées-gif(842833932067012658) sur le serveur Chaline(814097749603254303)