module.exports = {
    name: "communiste", 
    description: "moi je suis commeownist", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/ShockingIdenticalDevilfish-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}