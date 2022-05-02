module.exports = {
    name: "fbi", 
    description: "c'est le FBI fuck yeah", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/DismalJovialGoral-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}