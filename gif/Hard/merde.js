module.exports = {
    name: "merde", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/a75698dc79f62ffd9820673a834562ea/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://image.noelshack.com/fichiers/2014/39/1411664448-merde-quand-meme.gif');}
    }
}