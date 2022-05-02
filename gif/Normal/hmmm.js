module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "hmmm",
    description: "Hmmmmm...",
    execute(message) {
    const giflist = ["https://dailystormer.su/wp-content/uploads/2018/10/1euGcX.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T10:37:31.110Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)