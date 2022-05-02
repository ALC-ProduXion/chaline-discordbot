module.exports = {
    name: "imbatman", 
    description: "ça veut dire: 'Je suis Batman' en français, c'est drôle non ?", 
    execute(message) {
        const giflist = [ 
            "https://media1.tenor.com/images/e545c95d645d32bd99f90b382e7d7072/tenor.gif", 
            "https://thumbs.gfycat.com/CarelessGiftedAplomadofalcon-max-1mb.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}