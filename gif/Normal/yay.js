module.exports = {
    name: "yay", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/baby-yoda-baby-yoda-happy-laughing-smile-happy-gif-16061896",
            "https://cdn.pixilart.com/photos/orginal/3147e5b7f0ee4c7.gif",
            "https://media.tenor.com/images/cc78586cd5e9353b7e066eeb319f51f1/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}