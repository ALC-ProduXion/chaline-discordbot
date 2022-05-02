module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ilnesestrienpasse",
    description: "Non non, vraiment rien !",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/720970045932437556/875140396315983893/ilnesestrienpasse.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T22:20:30.986Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)