module.exports = {
    name: "clarinette", 
    description: "c'est un homme qui joue de la clarinette en somme l'un des plus gros bg de l'univers n'est-ce pas ?", 
    execute(message) {
        const giflist = [ 
            "https://64.media.tumblr.com/d94edf17a22c4b2a059fdf13c621bc5f/tumblr_oufr93VXCb1w5lhd2o1_400.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}