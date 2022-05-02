module.exports = {
    name: "bfmtv",
    description: "désinformation en continu",
    execute(message) {
        const giflist = [
            "https://thumbs.gfycat.com/GraveThankfulAsiaticmouflon-size_restricted.gif", 
            "https://www.gifservice.fr/img/gif-vignette-large/ee28dbac046e32444d00d8fdc8b4d8a9/160897-logo-bfm-canales-tv-multimedia.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}