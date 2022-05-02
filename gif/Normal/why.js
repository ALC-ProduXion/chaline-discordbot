module.exports = {
    name: "why",
    description: "mais bon snag mais pk",
    execute(message) {
        const giflist = [
            "https://i.gifer.com/7AlO.gif", 
            "https://lecahier.com/wp-content/uploads/2017/04/why.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}