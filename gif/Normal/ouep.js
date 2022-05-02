module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "ouep",
    description: "Oui",
    execute(message) {
    const giflist = ["https://media.tenor.com/images/e0715d1e42e6e9894739918609b718c0/tenor.gif","https://cdn.discordapp.com/attachments/720970045932437556/875140317928628264/ouemrbean.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T22:24:54.237Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)