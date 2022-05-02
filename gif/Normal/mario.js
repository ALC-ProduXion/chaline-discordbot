module.exports = {
    name: "mario", 
    description: "c'est mario un petit plombier moustachu", 
    execute(message) {
        const giflist = [ 
            "https://i.pinimg.com/originals/c0/96/74/c09674f53c5104dd5e716736a2449771.gif", 
            "https://media3.giphy.com/media/3o6fJ42Ud1rylg4eTS/giphy.gif",
            "https://media.tenor.com/images/c8e65de34281f3c70011d3f3a897f681/tenor.gif",
            "https://media1.giphy.com/media/WZdlab0U3AkSc/giphy.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}