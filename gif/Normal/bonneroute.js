module.exports = { //Commande générée par MagicTINTIN#4389(444579657279602699) (avec AddGif v1.0)
    name: "bonneroute",
    description: "Souhaites bonne route à des gens",
    execute(message) {
    const giflist = ["https://i1.wp.com/media4.giphy.com/media/mIMsLsQTJzAn6/giphy.gif","http://n.sinaimg.cn/auto/transform/20161209/9I2u-fxypipt0663542.gif","https://i.kinja-img.com/gawker-media/image/upload/t_original/wulz9pzn9ohbccfcbsis.gif","https://mediagamaniak.cdn.re/gal/gifs-vrac-72/encore-encore-autre-crash-test.gif","https://media.giphy.com/media/11V3dAPYzVNP8s/giphy.gif","https://media.tenor.com/images/8d1b982d5a674a1960d314d096594c50/tenor.gif","https://24.media.tumblr.com/b1e475ec19bbc1dc249a401e96c64365/tumblr_mm5nt2CTM81s02vreo1_400.gif"]
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le 2021-08-11T12:20:46.770Z depuis le channel gif-⭐-discussion(842763425351860234) sur le serveur Chaline(814097749603254303)