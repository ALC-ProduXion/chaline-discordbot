module.exports = {
    name: "pigeon",
    description: "c'est un pigeon rien de plus",
    execute(message) {
        const giflist = [
            "https://media.tenor.com/images/15d34498b49230d12160be443032e96e/tenor.gif", 
            "https://thumbs.gfycat.com/GlaringNeedyDorado-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}