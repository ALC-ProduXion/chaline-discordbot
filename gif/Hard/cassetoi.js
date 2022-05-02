module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "cassetoi",
    description: "Casse toi !",
    execute(message) {
    const giflist = ["https://tenor.com/view/nicolas-sarkozy-con-enfoir%C3%A9-casse-toi-pauvre-con-gif-5035200","https://media.lelombrik.net/t/e9c00c232b910a8ef700ed5fe840f4d2/p/01.gif","https://i.pinimg.com/originals/ab/af/e7/abafe738af0e2253af5343a2f9e0fbed.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-07-11T21:48:14.832Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)