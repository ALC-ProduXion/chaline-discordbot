module.exports = {
    name: "xd", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/60fc32a3e51c7e23866608cfd588105c/tenor.gif", 
            "https://64.media.tumblr.com/8ca552e781249a8a800912908a22625f/tumblr_ntng72cbZy1uzq66lo1_500.gif",
            "https://i.makeagif.com/media/2-10-2017/98Yc_V.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}