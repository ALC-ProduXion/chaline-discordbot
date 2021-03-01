module.exports = {
    name: "grossemerde", 
    description: "t'es qu'une grosse merde", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/842d9664e5f920c94db7619fd3b9434d/tenor.gif?itemid=5029484"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}