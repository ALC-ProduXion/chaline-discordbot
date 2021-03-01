module.exports = {
    name: "pute", 
    description: "la mère de nicolas est une grosse pute", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/d90deb05ec1de416cee480af9fe6dd88/tenor.gif?itemid=15160214"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}