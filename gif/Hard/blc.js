module.exports = { //UPDATE Modèle 2 créé par MagicTINTIN (ALC ProduXion) 20210225
    name: "blc",
    description: "",
    execute(message) {
        const giflist = [ // liste des gif
            "https://tenor.com/view/ok-csb-cool-story-bro-tired-yawn-gif-5625279", 
            "https://cdn.discordapp.com/attachments/814153127598882856/814628314442235974/onsenbranle.gif",
            "https://cdn.discordapp.com/attachments/662341875616972821/814577434199719976/1208563171773465871.gif" //Gif créé par Lydie BARBIER DE REULLE (mère de Paria12)
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); //choisi un gif au hasard
        message.channel.send(giflist[gifchoisi]);
    }
}