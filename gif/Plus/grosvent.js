module.exports = {
    name: "grosvent", 
    description: "Il y a beaucoup plus de vents que d'habitudes vous trouvez pas ?", 
    execute(message) {
        const giflist = [ 
            "https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/ZLBBJXAPB7SQ427KIRF32HUF7A.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}