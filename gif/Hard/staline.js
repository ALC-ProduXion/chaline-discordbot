module.exports = {
    name: "staline",
    description: "une personne très adroite euh à gauche",
    execute(message) {
        const giflist = [
            "https://steamuserimages-a.akamaihd.net/ugc/977729722246797818/0835379757419846B732D0BDEB3A0C72BA09FB88/", 
            "https://image.noelshack.com/fichiers/2020/52/2/1608635543-tenor.gif",
            "https://thumbs.gfycat.com/UnluckyPersonalHorseshoecrab-size_restricted.gif",
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}