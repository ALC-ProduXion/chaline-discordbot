module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "glisse",
    description: "Ça glisse",
    execute(message) {
    const giflist = ["http://blog2rire.fr/wp-content/uploads/2012/11/glissade.gif","http://www.yves.brette.biz/public/autres_arts/chien_glisse_verglas_froid.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-28T11:16:52.677Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)