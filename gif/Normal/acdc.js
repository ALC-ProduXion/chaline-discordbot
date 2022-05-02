module.exports = {
    name: "acdc",
    description: "acdc ma gueule",
    execute(message) {
        const giflist = [
            "https://i.pinimg.com/originals/1f/1b/6b/1f1b6b27fef4db6fbec019e65d2b3b1e.gif", 
            "https://data.photofunky.net/output/image/0/e/0/8/0e0875/photofunky.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}