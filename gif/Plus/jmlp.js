module.exports = {
    name: "jmlp", 
    description: "c'est ce bon vieux Jean-Marie Le Pen avec son bon vieux charisme", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/BogusReadyAfricangoldencat-size_restricted.gif", 
            "https://media.tenor.com/images/2fc917e027ce606c738a35157fbf318e/tenor.gif",
            "https://media.tenor.com/images/1744e625e8585bdd04c84665a0ec7897/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}