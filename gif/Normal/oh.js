module.exports = {
    name: "oh", 
    description: "oh", 
    execute(message) {
        const giflist = [ 
            "https://i.pinimg.com/originals/57/92/06/57920614402ecf39c897c14cf17ccd3e.gif", 
            "https://media.tenor.com/images/d4b364b2fbb116a60961fa8b3896db47/tenor.gif",
            "https://techcrunch.com/wp-content/uploads/2014/05/oh.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}