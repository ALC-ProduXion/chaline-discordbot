module.exports = {
    name: "malaise", 
    description: "aie malaise pour guillaume", 
    execute(message) {
        const giflist = [ 
            "https://www.francetvinfo.fr/pictures/z-fGU4qg6OYaTmlbfftRIxRUzdw/fit-in/720x/2017/04/19/phps3gpsu_1.gif", 
            "https://i.gifer.com/7QOm.gif",
            "https://64.media.tumblr.com/82c9df36c43b7acc4b1517fdb94721b3/tumblr_nkiw4zm7IO1sjcnrzo1_250.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}