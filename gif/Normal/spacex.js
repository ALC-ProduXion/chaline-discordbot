module.exports = {
    name: "spacex", 
    description: "les différents prototypes de space x", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/spacex-starship-starship-sn8-sn8-rocket-gif-19509098",
            "https://cdn.discordapp.com/attachments/684777805900546065/806271747401449522/sn9-4.gif",
            "https://tenor.com/view/spacex-sn10-elon-musk-success-sucessful-gif-20601970"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}