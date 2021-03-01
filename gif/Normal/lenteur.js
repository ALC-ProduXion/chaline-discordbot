module.exports = {
    name: "lenteur", 
    description: "personne excessivement lente", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/TediousHideousArgusfish-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}