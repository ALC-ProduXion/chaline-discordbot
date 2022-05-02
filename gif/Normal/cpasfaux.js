module.exports = {
    name: "cpasfaux", 
    description: "c'est pas faux", 
    execute(message) {
        const giflist = [ 
            "https://media3.giphy.com/media/XknChYwfPnp04/200.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}