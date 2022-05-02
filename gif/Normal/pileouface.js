module.exports = {
    name: "pileouface", 
    description: "Tire à pile ou face", 
    execute(message) {
        const giflist = [ 
            "Pile", 
            "Face" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}