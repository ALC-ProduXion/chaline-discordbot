module.exports = {
    name: "tropcon", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/816718413807353936/chuiscon.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}