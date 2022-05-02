module.exports = {
    name: "synchro", 
    description: "synchronisation", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/ValidColdAustrianpinscher-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}