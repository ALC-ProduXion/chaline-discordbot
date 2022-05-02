module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "plante",
    description: "PLANTÉES C'EST MOI QUI LES AI PLANTÉES",
    execute(message) {
    const giflist = ["https://tenor.com/view/cest-moi-qui-les-ai-plant%C3%A9s-vieille-plante-hurle-vieillehurleplante-gif-21515758"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-12-12T20:10:30.840Z depuis le channel channel(864162331113816074) sur le serveur Chaline(814097749603254303)