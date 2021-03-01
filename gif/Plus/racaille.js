module.exports = {
    name: "racaille", 
    description: "sarkozy va s'en débarasser", 
    execute(message) {
        const giflist = [ 
            "https://media3.giphy.com/media/3o7TKoEwApmZdfepXO/giphy.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}