module.exports = {
    name: "cdelagrossemerde", 
    description: "c'est de la grosse merde", 
    execute(message) {
        const giflist = [ 
            "https://i.pinimg.com/originals/b3/af/7a/b3af7ae64fa82976d05082c12f5e05d7.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}