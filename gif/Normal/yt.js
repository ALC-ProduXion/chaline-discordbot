module.exports = {
    name: "yt",
    description: "c'est youtube",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/BigBelatedBeagle-small.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}