module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "america",
    description: "America f*ck yeah !",
    execute(message) {
    const giflist = ["https://badbooksgoodtimes.com/wp-content/uploads/2017/09/america-fuck-yeah.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2022-03-21T20:10:25.092Z depuis le channel commandes(830893903531474944) sur le serveur ACDC ma gueule(460846845980049419)