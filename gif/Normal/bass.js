module.exports = {
    name: "bass",
    description: "wise choice",
    execute(message) {
        const giflist = [
            "https://i.imgur.com/1PhKAfr.gif", 
            "https://i.makeagif.com/media/4-21-2017/j_eTIe.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}