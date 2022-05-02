module.exports = {
    name: "nani", 
    description: "nani", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/5be2b5cbe23139f794ab46eed383a7d5/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}