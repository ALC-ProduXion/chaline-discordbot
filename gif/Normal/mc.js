module.exports = {
    name: "mc",
    description: "minecraft",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/BogusRemoteIsopod-max-1mb.gif", 
            "https://media1.giphy.com/media/qCFw3jLXkTAkM/200.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}