module.exports = {
    name: "chaline", 
    description: "fallait bien que j'aie mon propre gif non ?", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/842804836504305664/chaline2.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}