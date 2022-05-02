module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "keepcalm",
    description: "keep calm and switch to linux",
    execute(message) {
    const giflist = ["https://cdn.discordapp.com/attachments/704725540170367036/909158742489174026/KEEP_CALM_and_Switch_to_Linux.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-11-13T19:12:50.750Z depuis le channel testcmd(817527540154630144) sur le serveur Chaline(814097749603254303)