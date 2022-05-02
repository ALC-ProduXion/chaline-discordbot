module.exports = {
    name: "bjr", 
    description: "bonjour (ps: J'aurais voulu pour le président de zorana mais il existe c'st drôle non ?)", 
    execute(message) {
        const giflist = [ 
            "https://i.makeagif.com/media/6-08-2017/dfnVXg.gif",
            "https://i.imgur.com/cjHERMh.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}