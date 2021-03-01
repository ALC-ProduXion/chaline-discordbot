module.exports = {
    name: "gros", 
    description: "docteur palmashow insulte un patient de gros", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/814153127598882856/814787374864138260/tumblr_pt1prdWigD1tk76qio1_500.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}