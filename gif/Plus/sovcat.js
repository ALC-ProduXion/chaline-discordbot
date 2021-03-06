module.exports = {
    name: "sovcat", 
    description: "ou quelque chose comme ça", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/816741700345004042/sovietcat5.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}