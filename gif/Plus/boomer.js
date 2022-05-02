module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "boomer",
    description: "boomer",
    execute(message) {
    const giflist = ["https://media3.giphy.com/media/VJCDF2piuGifox4G0L/200.gif","https://media.tenor.com/images/543505185302f6c864a9fa9742ac2037/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T20:49:14.346Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)