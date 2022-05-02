module.exports = {
    name: "fuck", 
    description: "fuck you", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/150a4f1f6f33af29ad2a7f04a6705f84/tenor.gif", 
            "http://www.beulogue.fr/wp-content/uploads/2018/03/giphy2.gif",
            "https://www.gamaniak.com/media/gal/fuck-you-gifs/fuck-you-gifs_11.gif",
            "https://www.gamaniak.com/media/gal/fuck-you-gifs/fuck-you-gifs_45.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}