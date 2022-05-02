module.exports = {
    name: "cmoi", 
    description: "la République c'est moi ", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/7cb763c7ff7d7d9120d6f2e933ac4619/tenor.gif",
            "https://media.giphy.com/media/nD2sYNQwFlC00/giphy.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}