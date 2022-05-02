module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "spacexy",
    description: "Space X vs Space Y",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/720970045932437556/949963925871538216/spacexy.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-03-06T09:38:36.787Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)