module.exports = {
    name: "jaimemebattre", 
    description: "j'aime défoncer la gueule des gens", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/5-01-2017/SJs6nS.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}