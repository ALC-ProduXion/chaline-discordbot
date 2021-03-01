module.exports = {
    name: "capartencouille", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://image.noelshack.com/fichiers/2012/10/1331263000-1329206476638.gif');}
    }
}