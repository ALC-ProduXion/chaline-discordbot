module.exports = {
    name: "vrai", 
    description: "c'est vrai", 
    execute(message) {
        const giflist = [ 
            "https://vl-media.fr/wp-content/uploads/2020/05/giphy-14-1.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}