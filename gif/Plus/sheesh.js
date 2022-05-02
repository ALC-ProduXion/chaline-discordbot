module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "sheesh",
    description: "sheeeeesh",
    execute(message) {
    const giflist = ["https://tenor.com/view/ronan-sheesh-sheesh-gif-21479305","https://cdn.discordapp.com/attachments/684777805900546065/877122408912416798/sheesh.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-17T09:42:37.672Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)