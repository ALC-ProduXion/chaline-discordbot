module.exports = {
    name: "bonanniversaire", 
    description: "bon anniversaire", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/0efbf61a71d15b90e0ac6b1e5c27d9a0/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}