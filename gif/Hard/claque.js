module.exports = {
    name: "claque", 
    description: "j'aime moi aussi quand ça claque", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/1-23-2018/zc3Pbx.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}