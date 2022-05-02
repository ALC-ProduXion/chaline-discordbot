module.exports = {
    name: "ptitcon", 
    description: "c'est un sacré petit con", 
    execute(message) {
        const giflist = [ 
            "https://media0.giphy.com/media/wU8sfY0UKlruo/200w.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}