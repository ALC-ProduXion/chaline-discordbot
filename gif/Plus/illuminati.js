module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "illuminati",
    description: "Oh mon dieu ils nous controllent !",
    execute(message) {
    const giflist = ["https://media.giphy.com/media/ZTfTSegFNMnC0/giphy.gif","https://media.tenor.com/images/b9c652371b3d8a233441068153f4c467/tenor.gif","https://2.bp.blogspot.com/_ao9CEYsSIa0/TU1FzHphI4I/AAAAAAAAAPU/71alQ1GtJDo/s1600/pyramid9.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T12:08:17.578Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)