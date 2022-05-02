module.exports = {
    name: "windows",
    description: "passsez à ubuntu ;)",
    execute(message) {
        const giflist = [
            "https://miro.medium.com/max/710/1*pGr9npAp2XniXOyNd7eR4w.gif", 
            "https://i.imgur.com/xesoQcj.gif",
            "https://upload.wikimedia.org/wikipedia/commons/c/ca/WIN98.gif",
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ae885a19277753.562d7ae6f3ad3.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}