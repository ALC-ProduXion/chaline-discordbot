module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "oue",
    description: "Ouais...",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/720970045932437556/875140361465516082/ouepantoine.gif","https://cdn.discordapp.com/attachments/720970045932437556/875140334416437268/ouelesvisiteurs.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T22:23:17.028Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)