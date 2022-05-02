module.exports = {
    name: "neko", 
    description: "petit chat", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/842763425351860234/842791267565961267/petitchat.gif", 
            "https://cdn.discordapp.com/attachments/662341875616972821/842797306364428318/photofunky.gif",
            "https://cdn.discordapp.com/attachments/662341875616972821/842797792582041660/c03af87e9486d7844bffa711cf60cd5b.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}