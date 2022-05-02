module.exports = {
    name: "aie", 
    description: "aie coup dur ", 
    execute(message) {
        const giflist = [ 
            "https://i.imgur.com/91a8rA8.gif", 
            "https://media.tenor.com/images/ed864c1eaa80e9ba7d6b957f83ccead7/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}