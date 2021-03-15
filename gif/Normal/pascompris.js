module.exports = {
    name: "pascompris", 
    description: "", 
    execute(message) {
        const giflist = [ 
            "https://i.pinimg.com/originals/fc/53/ca/fc53ca69be8f359e4dac6736afd6bc6d.gif",
            "https://64.media.tumblr.com/973ddede3128eb01a065a49077556e07/tumblr_o24xp5ZeAG1ubfhlwo1_400.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}