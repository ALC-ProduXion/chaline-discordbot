module.exports = {
    name: "faux", 
    description: "faux", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/7456c967704c3da08ad2b550c239a8ad/tenor.gif", 
            "https://vl-media.fr/wp-content/uploads/2020/06/giphy-3.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}