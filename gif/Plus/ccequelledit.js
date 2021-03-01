module.exports = {
    name: "ccequelledit", 
    description: "that's what she sad de the office", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/9a2c4d10bea8bf0436e2736056a1cb63/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}