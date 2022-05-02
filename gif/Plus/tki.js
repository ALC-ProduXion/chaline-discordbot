module.exports = {
    name: "tki", 
    description: "ptdr t ki de jiraya", 
    execute(message) {
        const giflist = [ 
            "https://thumbs.gfycat.com/UnhappySadHeterodontosaurus-max-1mb.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}