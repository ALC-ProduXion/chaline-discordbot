module.exports = {
    name: "champagne", 
    description: "champagne", 
    execute(message) {
        const giflist = [ 
            "https://media3.giphy.com/media/IcdPUZfFDG9fcpmfp0/giphy.gif",
            "https://media3.giphy.com/media/QMkPpxPDYY0fu/200.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}