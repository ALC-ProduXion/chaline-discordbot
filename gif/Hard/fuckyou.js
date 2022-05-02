module.exports = {
    name: "fuckyou", 
    description: "fuck you", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/150a4f1f6f33af29ad2a7f04a6705f84/tenor.gif", 
            "https://thumbs.gfycat.com/EmptyArcticGermanpinscher-max-1mb.gif",
            "http://i.imgur.com/UETIh6a.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}