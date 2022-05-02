module.exports = {
    name: "cestmoi", 
    description: "la République c'est moi", 
    execute(message) {
        const giflist = [ 
            "https://risibank.fr/cache/stickers/d1101/110155-full.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}