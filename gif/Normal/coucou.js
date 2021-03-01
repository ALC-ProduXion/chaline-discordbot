module.exports = {
    name: "coucou", 
    description: "shining here's johnny", 
    execute(message) {
        const giflist = [ 
            "https://danstasalledebain.files.wordpress.com/2015/10/giphyjack.gif?w=354&h=192",
            "https://media1.tenor.com/images/1e552665a50994f2ed2892a03cfe71c4/tenor.gif?itemid=10424260"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}