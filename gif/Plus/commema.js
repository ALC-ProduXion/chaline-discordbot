module.exports = {
    name: "commema", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://64.media.tumblr.com/8b5dedc784b9dbf7a44da447074d2077/tumblr_olub7pMENN1si5tqro1_500.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}