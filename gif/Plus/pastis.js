module.exports = {
    name: "pastis", 
    description: "pastis", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/27c83e053f696d3ba0ee1c0523da12f4/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}