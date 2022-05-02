module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "euh",
    description: "euuuuh…",
    execute(message) {
    const giflist = ["http://www.onsecroyaitchic.com/wp-content/uploads/2015/10/louis-de-funes-gif-12.gif","https://i.makeagif.com/media/8-16-2017/NeiUZh.gif","https://media1.tenor.com/images/4a0f99b9f088483894b6e8868e6aa3e1/tenor.gif?itemid=5429629"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-10T08:56:26.064Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)