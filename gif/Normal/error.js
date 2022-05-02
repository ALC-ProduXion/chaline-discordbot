module.exports = {
    name: "error", 
    description: "c'était une erreur", 
    execute(message) {
        const giflist = [ 
            "https://img.over-blog-kiwi.com/0/82/53/64/20170315/ob_c757db_giphy-27.gif", 
            "https://media1.giphy.com/media/mq5y2jHRCAqMo/giphy.gif",
            "https://thumbs.gfycat.com/PresentEachIlsamochadegu-small.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}