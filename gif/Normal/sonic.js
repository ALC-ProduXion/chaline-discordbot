module.exports = {
    name: "sonic", 
    description: "c'est sonic un petit hérisson bleu voila c'est tout tu t'attendais à quoi de plus", 
    execute(message) {
        const giflist = [ 
            "https://cdn.discordapp.com/attachments/842763425351860234/843038015085608960/sonic.gif", 
            "https://tenor.com/view/running-run-for-it-sonic-hedgehog-gif-12709850",
            "https://data.photofunky.net/output/image/a/0/5/6/a056c0/photofunky.gif",
            "https://pa1.narvii.com/6032/d0cf5edd5ef729dd64a7cd74dbe0281431cb1c7d_hq.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}