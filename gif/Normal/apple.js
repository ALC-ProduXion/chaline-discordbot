module.exports = {
    name: "apple",
    description: "nous c'est la pomme vous c'est les poires",
    execute(message) {
        const giflist = [
            "https://www.gif-maniac.com/gifs/7/7084.gif", 
            "https://phoneky.co.uk/thumbs/screensavers/down/original/appleorigi_zTgpEKKY.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}