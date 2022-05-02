module.exports = {
    name: "discord",
    description: "omg mais c'est c'est ici que ce bot envoie ses messages",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/AffectionateAthleticCalf-size_restricted.gif", 
            "https://i.pinimg.com/originals/0d/5a/7a/0d5a7a920f011a34adf1ccea5046fb2c.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}