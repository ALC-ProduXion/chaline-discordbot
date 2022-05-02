module.exports = {
    name: "fdp", 
    description: "c'est un fdp", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/jdg-fdp-fred-vas-y-je-wais-lenculer-ce-fils-de-pute-gif-17236073", 
            "https://thumbs.gfycat.com/ThirstyDeadlyIbis-size_restricted.gif",
            "https://tenor.com/view/fdp-ntm-filsdepute-son-of-a-bitch-guess-the-word-gif-16162422"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}