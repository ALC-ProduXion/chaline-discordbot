module.exports = {
    name: "bleu", 
    description: "le drapeau des Etats-Unis", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/AnotherFancyEnglishpointer-size_restricted.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}