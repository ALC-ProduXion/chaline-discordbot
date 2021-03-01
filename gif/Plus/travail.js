module.exports = {
    name: "travail", 
    description: "c'est pour le travail", 
    execute(message) {
        const giflist = [ 
            "https://media1.giphy.com/media/hOTkSyziP4fOo/giphy.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}