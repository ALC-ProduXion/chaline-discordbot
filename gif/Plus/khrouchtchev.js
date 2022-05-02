module.exports = {
    name: "khrouchtchev", 
    description: "c'est une exemple", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/CoordinatedSelfishFlicker-max-1mb.gif", 
            "http://img-galleryroulette.stackpathdns.com/wp-content/uploads/2017/02/disneyland-04.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}