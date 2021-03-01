module.exports = { // UPDATE Modèle 2 créé par MagicTINTIN (ALC ProduXion) 20210225
    name: "bonapp", //nom de la commande
    description: "Souhaite un bon appétit à tout le monde", //description facultative sinon ""
    execute(message) {
        const giflist = [ // liste des gif
            "https://tenor.com/view/bon-app%c3%a9tit-bon-ap-gif-13585203", 
            "https://tenor.com/view/bonappetitlsf-usm67-bon-appetitlsf-deaf67-sign-language-enjoy-your-meal-gif-16794818", 
            "https://cdn.discordapp.com/attachments/662341875616972821/771817418661298236/kirby.gif", 
            "https://2img.net/h/media1.tenor.com/images/988253e10dadc4d6610d45d7f8d12c49/tenor.gif", 
            "https://gfycat.com/lastincomparableivorygull", 
            "https://gfycat.com/competenthopefulgiantschnauzer" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); //choisi un gif au hasard
        message.channel.send(giflist[gifchoisi]);
    }
}