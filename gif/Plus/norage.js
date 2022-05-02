module.exports = {
    name: "norage", 
    description: "qu'est-ce que la rage après tout ?", 
    execute(message) {
        const giflist = [ 
            "https://pics.eb4.be/i/6217/T87q3A0.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}