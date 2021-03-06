module.exports = {
    name: "bonjour", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/mr-bean-funny-hello-hi-wave-gif-3528683",
            "https://tenor.com/view/hello-funny-wave-chicken-gif-13330039",
            "https://cdn.discordapp.com/attachments/662341875616972821/771818155579670540/source_1.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}