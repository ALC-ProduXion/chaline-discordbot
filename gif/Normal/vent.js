module.exports = {
    name: "vent", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/silence-nobody-cares-wind-gone-gone-with-the-wind-gif-12318325');}
    }
}