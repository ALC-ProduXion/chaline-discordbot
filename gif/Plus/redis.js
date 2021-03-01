module.exports = {
    name: "redis", 
    description: "quand quelqu'un te fais chier", 
    execute(message) {
        const giflist = [ 
            "https://i2.wp.com/www.jcbtechno.com/wp-content/uploads/2014/10/pulpfiction.gif", 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}