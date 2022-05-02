module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "oe",
    description: "Ouais vraiment raccourci",
    execute(message) {
    const giflist = ["https://data.photofunky.net/output/image/e/2/0/e/e20e40/photofunky.gif","https://media.tenor.com/images/394abe9b8e571e1419c2023abbfdc508/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T11:59:57.997Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)