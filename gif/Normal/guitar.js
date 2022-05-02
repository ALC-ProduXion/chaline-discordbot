module.exports = {
    name: "guitar",
    description: "6 strings bass",
    execute(message) {
        const giflist = [
            "https://upload.wikimedia.org/wikipedia/commons/e/e6/Guitar_solo_gif.gif", 
            "https://media1.giphy.com/media/wUcvtcZOA25bi/giphy.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}