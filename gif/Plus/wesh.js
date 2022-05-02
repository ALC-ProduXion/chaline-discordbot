module.exports = {
    name: "wesh",
    description: "wesh les pousses",
    execute(message) {
        const giflist = [
            "https://media1.tenor.com/images/d5b35667b356fd2e5f16122646a51033/tenor.gif?itemid=19674979"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}