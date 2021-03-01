module.exports = {
    name: "gg", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://img.buzzfeed.com/buzzfeed-static/static/2017-05/29/7/asset/buzzfeed-prod-fastlane-01/anigif_sub-buzz-810-1496056486-5.gif');}
    }
}