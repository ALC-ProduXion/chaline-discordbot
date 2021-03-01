module.exports = {
    name: "magicboom", 
    description: "qd le createur de chaline pète un plomb après sa 42069e erreur de la journée", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/662341875616972821/815607034531676170/gifmagictintin.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}