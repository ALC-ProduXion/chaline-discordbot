module.exports = {
    name: "ftg", 
    description: "ferme ta gueule", 
    execute(message) {
        const giflist = [ 
            "https://media0.giphy.com/media/3o7TKpcUg5RvhzNy6Y/giphy.gif", 
            "https://imgur.com/CuTUmBf",
            "https://2img.net/h/38.media.tumblr.com/f513319575a06ad79337586310d3d54b/tumblr_naytdczo0v1qjnxa0o3_400.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}