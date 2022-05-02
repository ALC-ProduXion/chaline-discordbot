module.exports = {
    name: "poutine", 
    description: "Vladimir Poutine", 
    execute(message) {
        const giflist = [ 
            "https://www.gif-maniac.com/gifs/36/36486.gif", 
            "https://thumbs.gfycat.com/EcstaticSlowHornshark-size_restricted.gif",
            "https://media.tenor.com/images/27a7c8a8c86fd46ef74aaa962daf9983/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}