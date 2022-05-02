module.exports = {
    name: "redhot", 
    description: " red hot chili peppers", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/SaneBigheartedIberianmidwifetoad-max-1mb.gif", 
            "https://i.pinimg.com/originals/1a/bf/d0/1abfd0ecd5336ce4d5c2c2bc9d9aefb0.gif",
            "https://64.media.tumblr.com/2fb781abe3a70da9a7585f52518f0934/tumblr_mf3ahtUSnt1r980z2o1_400.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}