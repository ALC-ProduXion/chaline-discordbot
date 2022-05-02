module.exports = {
    name: "pourquoi",
    description: "mais pourquoi ?",
    execute(message) {
        const giflist = [
            "https://media1.tenor.com/images/58b43bc747114da9fa46cec8824b5a6a/tenor.gif?itemid=18357063", 
            "https://media3.giphy.com/media/sqGepD9sBHsCA/giphy.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}