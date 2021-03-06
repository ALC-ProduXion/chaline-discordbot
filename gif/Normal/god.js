module.exports = {
    name: "god", 
    description: "tu es dieu", 
    execute(message) {
        const giflist = [ 
            "https://24.media.tumblr.com/dc9183fba84d720fbb53fb190a4192a1/tumblr_mvhrftR9CM1seb4xzo1_500.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}