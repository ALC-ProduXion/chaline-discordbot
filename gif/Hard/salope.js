module.exports = {
    name: "salope", 
    description: "ftg salope", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/29fcad5e22f911e1db69a89716cde3f0/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}