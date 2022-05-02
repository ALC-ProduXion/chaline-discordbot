module.exports = {
    name: "gorbatchev", 
    description: "c'est un dictateur de l'Urss", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/BiodegradableEnchantedBobwhite-size_restricted.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}