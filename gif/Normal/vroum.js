module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "vroum",
    description: "vroum vroum",
    execute(message) {
    const giflist = ["https://tenor.com/view/shaggy-scooby-doo-running-fast-drive-gotta-go-gif-14864926"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-29T10:23:38.791Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)