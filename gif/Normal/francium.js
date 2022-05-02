module.exports = {
    name: "francium", 
    description: "c'est du francium", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/AliveFlimsyFishingcat-small.gif", 
            "https://i.makeagif.com/media/9-27-2016/3jFdPl.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}