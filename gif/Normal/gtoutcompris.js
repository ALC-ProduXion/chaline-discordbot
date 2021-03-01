module.exports = {
    name: "gtoutcompris", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/3f1f75732352319a2d2cbe9b5320b831/tumblr_npwe9zE0Tv1tk76qio1_r1_500.gifv');}
    }
}