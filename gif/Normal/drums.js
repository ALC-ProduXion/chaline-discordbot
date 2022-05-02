module.exports = {
    name: "drums",
    description: "drums are music",
    execute(message) {
        const giflist = [
            "https://media0.giphy.com/media/uKWE6qMrVOEEg/200.gif", 
            "https://i.gifer.com/IaST.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}