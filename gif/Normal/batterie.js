module.exports = {
    name: "batterie",
    description: "Sans la batterie vous ne pouvez rien faire",
    execute(message) {
        const giflist = [
            "https://data.photofunky.net/output/image/7/e/5/2/7e52f0/photofunky.gif", 
            "https://thumbs.gfycat.com/AbleWildFrenchbulldog-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}