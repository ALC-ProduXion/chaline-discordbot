module.exports = {
    name: "wsh",
    description: "wesh",
    execute(message) {
        const giflist = [
            "https://media.tenor.com/images/ea845f71ab274dbab10d03a8303dbb23/tenor.gif", 
            "http://img.xooimage.com/files110/c/f/e/wesh-4d82188.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}