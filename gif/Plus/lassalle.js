module.exports = {
    name: "lassalle", 
    description: "c'est Jean Lassalle", 
    execute(message) {
        const giflist = [ 
            "https://i.gifer.com/13qC.gif", 
            "https://media1.tenor.com/images/ca9c8f7e04064302e5f5e71e2ccccadf/tenor.gif",
            "https://media.tenor.com/images/68ce8d773f36c7bfff174d8aabcfc8be/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}