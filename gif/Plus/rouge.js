module.exports = {
    name: "rouge", 
    description: "c'est tout ce que j'ai trouvé de rouge", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/EarnestSecretAmericanbadger-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}