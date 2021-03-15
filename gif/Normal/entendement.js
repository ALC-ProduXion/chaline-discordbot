module.exports = {
    name: "entendement", 
    description: "ça dépasse l'entendement", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/4-30-2016/O-9RTk.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}