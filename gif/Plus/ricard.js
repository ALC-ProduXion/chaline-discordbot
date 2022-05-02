module.exports = {
    name: "ricard", 
    description: "j'adores le ricard", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/f3e9b06d1c4c004b572bebff4b051ca0/tenor.gif", 
            "https://www.gifservice.fr/img/gif-vignette-small/dfcf1256cb8d76584fc97be698b5b953/43329-humour-fun-art-affiches-retro-marques-ricard.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}