module.exports = {
    name: "wink", 
    description: "clin d'oeil", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/41c4b4aae7e2b2328752e573b327ec2c/tenor.gif", 
            "https://cdn.discordapp.com/attachments/704725540170367036/842775253607383060/ultrawink.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}