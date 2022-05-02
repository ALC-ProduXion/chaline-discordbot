module.exports = {
    name: "bravofdp", 
    description: "bravo fils de pute", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/9daf78b62f8bb2378215dcf2cd7e3cf6/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}