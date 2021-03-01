module.exports = {
    name: "taisezvous", 
    description: "fermez vos gueules", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/c87eee8759e3e4eddaac3e7d22ef031c/tenor.gif?itemid=16185612",
            "https://i.pinimg.com/originals/aa/9f/dd/aa9fdde1fa684b7f6be7fbbb82cecded.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}