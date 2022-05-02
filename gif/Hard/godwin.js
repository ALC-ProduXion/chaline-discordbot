module.exports = {
    name: "godwin", 
    description: "c'est le saint point ", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/CheerfulTintedFattaileddunnart-size_restricted.gif", 
            "https://i.makeagif.com/media/3-17-2015/zkR0Ff.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}