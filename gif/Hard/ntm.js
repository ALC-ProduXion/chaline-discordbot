module.exports = {
    name: "ntm", 
    description: "euh nique ta mère pour voir mdr", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/SlowThoughtfulEgg-small.gif", 
            "https://media.tenor.com/images/661ec89ed856db52c02b7bd570bf8b71/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}