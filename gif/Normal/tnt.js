module.exports = {
    name: "tnt",
    description: "trinitrotoluene",
    execute(message) {
        const giflist = [
            "https://www.gif-maniac.com/gifs/39/39181.gif", 
            "https://media.tenor.com/images/07480b268de188c173659b1d25dbe862/tenor.gif",
            "https://i.gifer.com/9v84.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}