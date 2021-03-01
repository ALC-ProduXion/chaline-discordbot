
module.exports = {
    name: "raf", 
    description: "plamashow rien à foutre", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/palmashow-beauf-foutre-papa-gif-13246076", 
            "https://media1.tenor.com/images/400be09fb158c772f3c03683793e9d85/tenor.gif?itemid=5169701" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length - 1)); 
        message.channel.send(giflist[gifchoisi]);
    }
}