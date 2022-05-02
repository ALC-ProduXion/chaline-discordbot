module.exports = {
    name: "modo",
    description: "faut les respecter sinon ça fait mal",
    execute(message) {
        const giflist = [
            "https://i.gifer.com/7Ei9.gif", 
            "https://media.tenor.com/images/308409cf8d7f6dab4eccd86bd56a779e/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}