module.exports = {
    name: "respect", 
    description: "vous gagnez du respect", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/33fd2a21371079f2517da25511c2e1f1/tenor.gif", 
            "https://thumbs.gfycat.com/ElectricNauticalBird-max-1mb.gif",
            "http://24.media.tumblr.com/tumblr_lnawlk3fs01qlecpso1_400.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}