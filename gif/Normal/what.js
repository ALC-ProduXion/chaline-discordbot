module.exports = {
    name: "what", 
    description: "nani", 
    execute(message) {
        const giflist = [ 
            "http://i.giphy.com/4sNIjZk8ZYTvO.gif"
        ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}