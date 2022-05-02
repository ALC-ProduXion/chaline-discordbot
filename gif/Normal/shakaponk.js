module.exports = {
    name: "shakaponk", 
    description: "c'est shakaponk", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/842771267748495410/shaka1.gif", 
            "https://cdn.discordapp.com/attachments/704725540170367036/842772436252229652/shaka2lite.gif",
            "https://cdn.discordapp.com/attachments/704725540170367036/842772871318863882/shaka3.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}