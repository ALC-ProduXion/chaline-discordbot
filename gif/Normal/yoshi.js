module.exports = {
    name: "yoshi",
    description: "OUI YOSHI !",
    execute(message) {
        const giflist = [
            "https://media.tenor.com/images/74101901ae6b960854e443f13acf5e20/tenor.gif", 
            "https://thumbs.gfycat.com/ClumsySecondaryChupacabra-size_restricted.gif",
            "https://media.tenor.com/images/9295d1b6385f4eb42698e5e51468a541/tenor.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}