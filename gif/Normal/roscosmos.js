module.exports = {
    name: "roscosmos",
    description: "c'est la nasa mais avec moins de budget et en russie",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/SeveralFlusteredGibbon-max-1mb.gif", 
            "https://thumbs.gfycat.com/TastyRelievedHen-size_restricted.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}