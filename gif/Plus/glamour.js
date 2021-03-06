module.exports = {
    name: "glamour", 
    description: "président zorana", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/1-01-2015/4pRhcn.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}