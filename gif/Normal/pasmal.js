module.exports = {
    name: "pasmal",
    description: "pas mal non ?",
    execute(message) {
        const giflist = [
            "https://media.tenor.com/images/4659699626d8295e1e8cd90edca66373/tenor.gif", 
            "https://i.makeagif.com/media/8-22-2017/1NnrTa.gif",
            "https://media.tenor.com/images/2d67848c9e415ebe683cb79e8159d8b5/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}