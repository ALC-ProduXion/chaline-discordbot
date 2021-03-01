module.exports = {
    name: "dontdoit", 
    description: "ne le fais pas stp", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/8-13-2016/dfEEfO.gif", 
            "https://media3.giphy.com/media/9EKBsjzgzzpu0/giphy.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}