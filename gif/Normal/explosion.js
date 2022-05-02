module.exports = {
    name: "explosion", 
    description: "michael bayxplosions", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/5-08-2016/NeG9LU.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}