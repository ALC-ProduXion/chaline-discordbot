module.exports = {
    name: "cestlavie", 
    description: "la vie cette sale race", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/1-26-2018/paIp1E.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}