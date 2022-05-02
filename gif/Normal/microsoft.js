module.exports = {
    name: "microsoft",
    description: "Microsoft va t'en",
    execute(message) {
        const giflist = [
            "https://66.media.tumblr.com/f5bbcfc1fc918950f39256283d7a08a3/tumblr_offa3cOq361vxqk8uo1_500.gif", 
            "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/windows_vista_mobile-124747.gif",
            "https://media1.tenor.com/images/80550c302af8e1b8af80267b217e9694/tenor.gif?itemid=9638684"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}