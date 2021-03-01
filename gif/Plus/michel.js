module.exports = {
    name: "michel", 
    description: "michel c'est le brésil", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/f938eae14dcf4825b10264374b0e3a79/tenor.gif?itemid=20393757"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}