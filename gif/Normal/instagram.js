module.exports = {
    name: "instagram",
    description: "instagram",
    execute(message) {
        const giflist = [
            "https://static.wixstatic.com/media/5bb0aa_515520566e124615acc3fe35d6802c6f~mv2.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}