module.exports = {
    name: "tetris", 
    description: "c'est le seul jeu russe connu mondialement et oui jamy", 
    execute(message) {
        const giflist = [ 
            "https://media1.giphy.com/media/5Tndtit6LsZmE/giphy.gif", 
            "https://thumbs.gfycat.com/SerpentinePreciousAmericanratsnake-max-1mb.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}