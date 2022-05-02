module.exports = {
    name: "blanquer", 
    description: "c'est blanquer", 
    execute(message) {
        const giflist = [ 
            "https://64.media.tumblr.com/170321fa631498733e47f37f8ddb0476/4238e50239250e54-db/s640x960/85d2e8f223fc2593f02f66b7f43e122264a30945.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}