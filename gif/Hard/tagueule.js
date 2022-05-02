module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "tagueule",
    description: "on t'a dit ta gueule !",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/720970045932437556/875140392775983114/tagueuleundinner.gif","https://giphy.com/gifs/un-dans-ta-gueule-9eiJ2v4EhnDPO","https://tenor.com/view/ta-gueule-toi-tg-toi-tg-ta-gueule-gif-20110771"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T22:19:06.535Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)