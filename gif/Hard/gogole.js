module.exports = {
    name: "gogole", 
    description: "tout est dit", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/44db2d536ea8486eac67cdbe9c4b5df9/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}