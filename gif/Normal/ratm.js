module.exports = {
    name: "ratm", 
    description: "rage against the machine", 
    execute(message) {
        const giflist = [ 
            "https://64.media.tumblr.com/b6ebb3803d0c0119494cba3d8ee79da8/tumblr_oz0sicWOyJ1t1zraco1_500.gif", 
            "https://thumbs.gfycat.com/ComposedAmpleLadybird-max-1mb.gif",
            "https://media.tenor.com/images/7d359f40b6a95b66e330846e476e8ac0/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}