module.exports = {
    name: "stp", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/1893a2b457249d5a9a73333729c773b0/tumblr_mk14nxCYYk1rtmlvfo2_250.gif');}
    }
}