module.exports = {
    name: "cuisine", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/704725540170367036/818561045215969350/cuisine2.gif",
            "https://www.ge-rh.expert/wp-content/uploads/2019/03/anigif_sub-buzz-10581-1479459459-4.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}