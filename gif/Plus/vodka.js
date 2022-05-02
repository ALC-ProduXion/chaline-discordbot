module.exports = {
    name: "vodka",
    description: "la boisson des héros",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/CoolOffensiveHamadryad-size_restricted.gif", 
            "https://j.gifs.com/2kA9J.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}