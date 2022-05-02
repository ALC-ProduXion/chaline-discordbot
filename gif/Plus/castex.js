module.exports = {
    name: "castex", 
    description: "c'est castex", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/a82917d5fc1921f351a1a18d926f6884/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}