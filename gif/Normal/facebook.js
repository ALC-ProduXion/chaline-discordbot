module.exports = {
    name: "facebook",
    description: "facebook n'est-ce pas ?",
    execute(message) {
        const giflist = [
            "https://media.giphy.com/headers/facebook/FuLFvah0klRm.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}