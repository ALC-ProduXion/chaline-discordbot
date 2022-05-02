module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "calme",
    description: "c'est calme",
    execute(message) {
    const giflist = ["https://www.uniontlm.fr/wp-content/uploads/2020/05/calme.gif","http://rasta666s.r.a.pic.centerblog.net/230bb121.gif","https://media1.tenor.com/images/d0741c2f749df60c30b4e872630fc135/tenor.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:29:17.979Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)