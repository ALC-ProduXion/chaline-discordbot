module.exports = {
    name: "aurevoiraurevoir", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/bonjour-bonjour-bonjour-astronogeek-au-revoir-aurevoir-au-revoir-gif-18997832');}
    }
}