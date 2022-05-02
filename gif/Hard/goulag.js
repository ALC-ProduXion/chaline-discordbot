module.exports = {
    name: "goulag",
    description: "un camp de vacances entièrement payé",
    execute(message) {
        const giflist = [
            "https://media.tenor.com/images/45ee030cf2aa0aca03a5b2f726f702b7/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}