module.exports = {
    name: "jeanne", 
    description: "elle est où Jeanne palmashow", 
    execute(message) {
        const giflist = [ 
            "https://64.media.tumblr.com/12ab92bd84de0c2b2592cb3dcc51d585/tumblr_nn7j9uODId1tk76qio1_r1_400.gifv",
            "https://media.tenor.com/images/2eb5b694afd8853d9ee6dcb6dbc9d84c/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}