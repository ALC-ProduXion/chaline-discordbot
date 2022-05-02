module.exports = {
    name: "youtube",
    description: "c'est youtube",
    execute(message) {
        const giflist = [
            "https://laurablt.com/wp-content/uploads/2019/11/giphy-1.gif",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Youtube_2018.gif/799px-Youtube_2018.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}