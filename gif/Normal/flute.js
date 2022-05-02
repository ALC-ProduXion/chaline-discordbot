module.exports = {
    name: "flute", 
    description: "J'aime les gens qui joue de la flute mais ils ne sont pas aussi incroyable que ceux qui jouent de la clarinette.", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/ImperturbableAccomplishedBooby-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}