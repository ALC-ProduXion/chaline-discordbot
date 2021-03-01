module.exports = {
    name: "doublestonks", 
    description: "doublestonks", 
    execute(message) {
        const giflist = [ 
            "https://i.imgflip.com/3twi71.png"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}