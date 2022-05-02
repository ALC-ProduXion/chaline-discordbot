module.exports = {
    name: "gojira", 
    description: "c'est gojira", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/EnlightenedMarriedLark-max-1mb.gif", 
            "https://thumbs.gfycat.com/BlackandwhiteBareKittiwake-max-1mb.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}