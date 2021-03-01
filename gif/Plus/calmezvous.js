module.exports = {
    name: "calmezvous", 
    description: "calmez-vous", 
    execute(message) {
        const giflist = [ 
            "https://media.tenor.com/images/ff05a2278bbad91ed2c789181eb53c53/tenor.gif",
            "https://media1.tenor.com/images/d0741c2f749df60c30b4e872630fc135/tenor.gif?itemid=7744607"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}