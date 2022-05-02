module.exports = {
    name: "holyslap", 
    description: "holy slap de davie504 le bassiste", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/626b9948f6f96d97ead144623f11e199/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}