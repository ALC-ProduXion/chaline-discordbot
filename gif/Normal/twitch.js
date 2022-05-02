module.exports = {
    name: "twitch",
    description: "stream on twitch",
    execute(message) {
        const giflist = [
            "https://i.imgur.com/zi9ZLqe.gif", 
            "https://i.pinimg.com/originals/ec/fa/37/ecfa37c5f4abaad2f6cf39f4316fb9c7.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}