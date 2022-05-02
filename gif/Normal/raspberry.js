module.exports = {
    name: "raspberry",
    description: "c'est là que je suis hébergé",
    execute(message) {
        const giflist = [
            "https://upload.wikimedia.org/wikipedia/commons/1/10/Raspberry-Pi-3.gif", 
            "https://thumbs.gfycat.com/EnragedSelfreliantBangeltiger-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}