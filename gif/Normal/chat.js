module.exports = {
    name: "chat", 
    description: "l'heure du chat a sonné", 
    execute(message) {
        const giflist = [ 
            "https://j.gifs.com/ygJLrV.gif", 
            "https://acegif.com/wp-content/gifs/happy-cat-13.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}