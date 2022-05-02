module.exports = {
    name: "planq", 
    description: "c'est un plan cul mais avec un q LOL*rire gras*", 
    execute(message) {
        const giflist = [ 
            "https://i.pinimg.com/originals/36/5d/e0/365de051e5400c3330afac8dc0bf79bb.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}