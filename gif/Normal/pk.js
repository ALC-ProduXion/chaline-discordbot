module.exports = {
    name: "pk",
    description: "mais pourquoi ?",
    execute(message) {
        const giflist = [
            "https://i.pinimg.com/originals/45/08/f5/4508f57ac2413122c9f12cb4eb9e8b46.gif", 
            "https://media1.giphy.com/media/3o6ZtciYWnQW0irW1i/200w.gif?cid=82a1493bm6wrbywce3kgo6b47tz10i2cbpdi0gnxaftckzed&rid=200w.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}