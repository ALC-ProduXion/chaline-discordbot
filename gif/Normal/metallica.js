module.exports = {
    name: "metallica", 
    description: "c'est metallica", 
    execute(message) {
        const giflist = [ 
            "https://i.pinimg.com/originals/56/e0/2c/56e02c8a2ad110cb6e367ff0b663d037.gif", 
            "https://media.tenor.com/images/596f115e1c754adc44b2c35a40f6d5b9/tenor.gif",
            "https://cdn.discordapp.com/attachments/704725540170367036/842768749458489384/metalica.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}