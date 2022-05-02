module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "fossoyeurdefilm",
    description: "Le fossoyeur de films",
    execute(message) {
    const giflist = ["https://tenor.com/view/fossoyeur-de-film-pupuce-mad-gif-6153344","https://media1.tenor.com/images/55591494ab48662b04426cd7daddef2c/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:33:47.048Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)