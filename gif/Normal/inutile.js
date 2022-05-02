module.exports = {
    name: "inutile", 
    description: "tu es inutile harry", 
    execute(message) {
        const giflist = [ 
            "https://media0.giphy.com/media/3oz8xGLkVN8AfgJIre/200w.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}