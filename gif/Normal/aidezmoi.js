module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "aidezmoi",
    description: "send help plz",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/720970045932437556/875140394025877585/aidezmoi.gif","https://media.giphy.com/media/l41YxbocKKocjada0/giphy.gif","http://i1221.photobucket.com/albums/dd464/ctpgif/Sarko-aidez-moi.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T22:17:05.827Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)