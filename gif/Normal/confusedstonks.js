module.exports = {
    name: "confusedstonks", 
    description: "confused stonks", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/814623865015238666/confusedstonks.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}