module.exports = {
    name: "nion", 
    description: "nionnnnnnnnnnnnnn", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/03e894d75b4914466c96c1e2c21fe50e/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}