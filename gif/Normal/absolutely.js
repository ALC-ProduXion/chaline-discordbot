module.exports = {
    name: "absolutely", 
    description: "totalment d'accord avec vous mon cher", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/GlaringSlimDinosaur-size_restricted.gif", 
            "https://media.tenor.com/images/a79ce131e3300200afc26634d9294879/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}