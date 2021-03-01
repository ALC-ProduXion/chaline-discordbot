module.exports = {
    name: "gfaim", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/7b776350bbf8237f9f60e0741cfdeccf/tumblr_oab3oud2uJ1v4lxllo2_250.gifv');}
    }
}