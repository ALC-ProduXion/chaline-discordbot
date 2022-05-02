module.exports = {
    name: "poissonrouge", 
    description: "Le poisson rouge c'est moi", 
    execute(message) {
        const giflist = [ 
            "https://image.over-blog.com/fU6hYh3cr9J1lYb_IZqU3euWv0k=/fit-in/500x500/filters:no_upscale()/image%2F1770755%2F20210122%2Fob_199b89_giphy9b3.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}