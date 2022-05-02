module.exports = {
    name: "twitter",
    description: "mais qui utilise encore ça ?",
    execute(message) {
        const giflist = [
            "https://f.hellowork.com/blogdumoderateur/2014/06/twitter-gif.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}