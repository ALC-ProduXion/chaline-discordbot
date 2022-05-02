module.exports = {
    name: "lenine",
    description: "commmuuuunnnissssmmmeeee",
    execute(message) {
        const giflist = [
            "https://steamuserimages-a.akamaihd.net/ugc/912420007700467668/D4C2F01F515C7D5376BFF93DCF20452686E98F7F/", 
            "https://media.tenor.com/images/0621c6a822bc98b9d3e7f52e7b144671/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}