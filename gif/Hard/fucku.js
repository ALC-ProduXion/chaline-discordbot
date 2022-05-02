module.exports = {
    name: "fucku", 
    description: "fuck you ", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/150a4f1f6f33af29ad2a7f04a6705f84/tenor.gif", 
            "https://i.pinimg.com/originals/6b/b7/47/6bb747eb890ef231e64f830d4e12d9e7.gif",
            "https://media.tenor.com/images/05b8d639b878c7b8dc8e290a1089b0b2/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}