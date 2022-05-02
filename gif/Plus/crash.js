module.exports = {
    name: "crash",
    description: "c'est une exemple",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/CoarseAshamedGartersnake-size_restricted.gif", 
            "https://www.brain-magazine.fr/m/posts/27659/originals/crash.gif",
            "https://www.gif-maniac.com/gifs/50/49623.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}