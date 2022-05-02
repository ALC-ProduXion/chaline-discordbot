module.exports = {
    name: "admin", 
    description: "c'est l'admin parfois comparé à Dieu", 
    execute(message) {
        const giflist = [ 
            "https://media1.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif", 
            "https://thumbs.gfycat.com/EveryUnrulyBabirusa-size_restricted.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}