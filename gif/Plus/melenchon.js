module.exports = {
    name: "melenchon", 
    description: "c'est melenchon et la République c'est lui", 
    execute(message) {
        const giflist = [ 
            "https://i.gifer.com/7OOD.gif", 
            "https://media3.giphy.com/media/l3JDvdYB90ksYKRuo/giphy.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}