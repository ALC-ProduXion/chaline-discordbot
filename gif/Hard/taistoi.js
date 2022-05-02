module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "taistoi",
    description: "Tais toi !",
    execute(message) {
    const giflist = ["https://tenor.com/view/vilebrequin-vilebrequin-sylvain-levy-vilebrequin-sylvain-vilebrequin-levy-sylvain-levy-gif-21866498","https://media.tenor.com/images/19d64ced156f973a018c84b8df88e190/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:42:32.751Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)