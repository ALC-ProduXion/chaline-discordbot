module.exports = {
    name: "killhim", 
    description: "tuez-le", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/CreepyDangerousCassowary-small.gif", 
            "https://tenor.com/view/runover-kid-child-road-kill-running-over-gif-5744950",
            "https://media1.tenor.com/images/ec05599a94b28c963d8e1671e9706065/tenor.gif?itemid=7390009",
            "https://media.tenor.com/images/ad5544c0cc1b04622cc3413ddd1fe63a/tenor.gif",
            "https://media.tenor.com/images/4f7eada47477fe0184f54e074f44d2d8/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}