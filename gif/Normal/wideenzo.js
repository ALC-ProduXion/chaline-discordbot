module.exports = {
    name: "wideenzo", 
    description: "c'est enzo qui imite poutine, Enzo, aussi connu sous le pseudo Paria12 qui a contribué a beaucoup de nos commandes", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/786987051286790166/787052732824420392/20201211_094904_3.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}