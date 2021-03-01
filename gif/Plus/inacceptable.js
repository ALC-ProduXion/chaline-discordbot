module.exports = {
    name: "inacceptable", 
    description: "c'est inacceptable", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/814975245873446972/815555345149460530/tenor_1.gif", 
            "https://media.tenor.com/images/b5dda7560931b021a640583425d353d2/tenor.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}