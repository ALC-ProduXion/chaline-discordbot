module.exports = {
    name: "connard", 
    description: "c'est un connard", 
    execute(message) {
        const giflist = [ 
            "https://risibank.fr/cache/stickers/d1720/172047-full.gif", 
            "https://media1.tenor.com/images/4a3f91659ab6a81e0abf53668117c4cd/tenor.gif?itemid=5455218" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}