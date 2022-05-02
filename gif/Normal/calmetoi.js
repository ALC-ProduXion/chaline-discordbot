module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "calmetoi",
    description: "calme toi",
    execute(message) {
    const giflist = ["https://tenor.com/view/melenchon-calme-toi-calmez-vous-calmer-calme-gif-16381391","http://boredbug.com/wp-content/uploads/2014/12/calm-down.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:30:45.451Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)