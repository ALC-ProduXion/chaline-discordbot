module.exports = {
    name: "dragonforce", 
    description: "c'est dragon force", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/EarlyBlushingJoey-small.gif", 
            "https://thumbs.gfycat.com/AfraidThreadbareCaiman-max-1mb.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}