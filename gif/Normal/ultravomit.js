module.exports = {
    name: "ultravomit", 
    description: "ultra vomit", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/VioletBoldBustard-max-1mb.gif", 
            "https://cdn.discordapp.com/attachments/704725540170367036/842777008357638164/ultravomit.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}