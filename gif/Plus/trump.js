module.exports = {
    name: "trump", 
    description: "c'est trump", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/RewardingFrighteningButterfly-max-1mb.gif", 
            "https://media1.tenor.com/images/9d1f7e9335480d5c58dad8a3530e56a4/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}