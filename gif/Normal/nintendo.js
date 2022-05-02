module.exports = {
    name: "nintendo", 
    description: "Y a pas de nintendo sciwtz c'est dommage", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/EverlastingNeedyEnglishpointer-size_restricted.gif", 
            "http://66.media.tumblr.com/5bd1e321993adbef998cf2623f1a619a/tumblr_od446xN8Xo1rl04amo1_540.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}