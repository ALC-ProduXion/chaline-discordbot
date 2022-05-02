module.exports = {
    name: "rhcp", 
    description: "red hot chili peppers", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/OptimisticSarcasticHypsilophodon-size_restricted.gif", 
            "https://media1.tenor.com/images/b4e65dd9ddbe9806b701e665823519b1/tenor.gif",
            "https://i.makeagif.com/media/3-10-2017/OaaS7T.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}