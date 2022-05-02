module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "cringe",
    description: "oh no cringe",
    execute(message) {
    const giflist = ["https://c.tenor.com/WarZqLGgTHoAAAAM/oh-no-cringe-cringe.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-13T12:07:16.403Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)