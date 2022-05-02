module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "amongus",
    description: "Among us",
    execute(message) {
    const giflist = ["https://tenor.com/view/puppyy3533amoung-us-puppyy-kitchen-pantry-amoung-us-impostor-puppyy-amoung-us-impostor-gif-18651428","https://tenor.com/view/among-us-kill-purple-kills-cyan-purple-killer-gentleman-died-man-gif-19422877"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-12-01T08:25:01.447Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)