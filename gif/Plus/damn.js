module.exports = {
    name: "damn", 
    description: "damn", 
    execute(message) {
        const giflist = [ 
            "https://media3.giphy.com/media/cIQWVGPe7QAmF7xDCs/200.gif", 
            "https://media.tenor.com/images/0ef67dcb10fc3e5e2737e5058abe1205/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}