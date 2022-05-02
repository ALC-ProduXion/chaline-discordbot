module.exports = {
    name: "nasa",
    description: "ils ont réussi à amener l'homme sur la lune pour la première fois !",
    execute(message) {
        const giflist = [
            "https://media.tenor.com/images/dc656eb13a82bac41573b5f218650eac/tenor.gif", 
            "https://thumbs.gfycat.com/EveryBadGalapagosdove-max-1mb.gif",
            "https://64.media.tumblr.com/18dfd0a9582af355d2abb9b9074b812f/tumblr_n8tc5jZzqx1rnq3cto2_r1_500.gifv"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}