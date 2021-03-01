module.exports = {
    name: "miaou", 
    description: "chat nounours", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/f7eae0d98e40627be4e198b1b7756425/tenor.gif?itemid=15159957"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}