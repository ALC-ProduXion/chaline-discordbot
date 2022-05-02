module.exports = {
    name: "rammstein", 
    description: "c'est rammstein", 
    execute(message) {
        const giflist = [ 
            "https://media0.giphy.com/media/udiuHKBkrVb4Q/200.gif", 
            "https://media.tenor.com/images/a06e809e09f5c2f0765ee5a7f1d8c8a3/tenor.gif",
            "https://i.pinimg.com/originals/3e/34/6f/3e346f73cb5694526bd21e9e83f61f25.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}