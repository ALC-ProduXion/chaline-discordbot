module.exports = {
    name: "hi", 
    description: "bonjour ", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/acc4116372dcc4b342cb1a00ae657151/tenor.gif", 
            "https://thumbs.gfycat.com/EssentialEarlyBobcat-size_restricted.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}