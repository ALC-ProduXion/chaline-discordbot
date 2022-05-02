module.exports = { //Commande générée par Paria12#1246(584005831306117120) (avec AddGif v1.0)
    name: "tressale",
    description: "bah c'est très sale quoi",
    execute(message) {
    const giflist = ["https://media2.giphy.com/media/3joOYUPuTqXPsDytNm/200w.gif?cid=82a1493bvb0rfjg8w123j7h3ym2226gc4p5xod74jrfwpjc3&rid=200w.gif&ct=g","https://i.makeagif.com/media/4-21-2017/JoeHOR.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:37:19.477Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)