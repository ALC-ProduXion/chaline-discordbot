module.exports = {
    name: "joyeuxanniversaire", 
    description: "joyeux anniversaire", 
    execute(message) {
        const giflist = [ 
            "https://media.toucharger.com/web/toucharger/upload/image_domain/7/6/76546/76546.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}