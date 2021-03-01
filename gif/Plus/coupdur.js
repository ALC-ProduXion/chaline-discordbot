module.exports = {
    name: "coupdur", 
    description: "aie..... coup dur pour guillaume", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/c35e13fda0f3eb62332060001ea7e7f9/tenor.gif",
            "https://media1.tenor.com/images/d7d25b89da4679f24ce1af1790d725df/tenor.gif?itemid=13266649" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}