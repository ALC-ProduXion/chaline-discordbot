module.exports = {
    name: "guitare",
    description: "instrument à six cordes",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/RightGoodnaturedDogwoodclubgall-size_restricted.gif", 
            "https://giffiles.alphacoders.com/173/17355.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}