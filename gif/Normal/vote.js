module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "vote",
    description: "A voter",
    execute(message) {
    const giflist = ["http://lespopines.l.e.pic.centerblog.net/4ca82fbe.gif","https://images.ctfassets.net/lm0nxqkzuy44/E5XaNBGH5zn82MSj1WzNc/8246e6e8e39ef09076766fa632eb962b/votinggif.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:55:24.515Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)