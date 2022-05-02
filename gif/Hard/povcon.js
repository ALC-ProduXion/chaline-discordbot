module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "povcon",
    description: "Sarko disant pov'con",
    execute(message) {
    const giflist = ["https://66.media.tumblr.com/ee9d554d9cc0bc1e3d9584750ff14ee3/tumblr_o5oe8aE7Jg1rb2l1co1_400.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:56:09.064Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)