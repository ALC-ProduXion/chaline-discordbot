module.exports = {
    name: "nulnulnul", 
    description: "nul germain", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/nul-nul-nul-mohamed-henni-gif-12592712"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}