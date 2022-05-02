module.exports = {
    name: "bonannif", 
    description: "bon anniversaire", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/c8e44f78ff5a322cb6af748df6fe9a1a/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}