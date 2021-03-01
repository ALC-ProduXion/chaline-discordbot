module.exports = {
    name: "beepbeep", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/meep-meep-roadrunner-looney-tunes-run-fast-gif-5055539');}
    }
}