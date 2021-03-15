module.exports = {
    name: "nope", 
    description: "nope", 
    execute(message) {
        const giflist = [ 
            "https://media3.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif", 
            "https://64.media.tumblr.com/tumblr_m4zk0xaIfW1rul0hko1_500.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}