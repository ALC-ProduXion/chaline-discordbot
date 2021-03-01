module.exports = {
    name: "etcestpasfini", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/798e4e82d0e4691bfadb0f3c4c51ccaa/tumblr_n0xm24qMfD1rb2l1co1_400.gif');}
    }
}