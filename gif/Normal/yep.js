module.exports = {
    name: "yep", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.pinimg.com/originals/f7/c2/39/f7c239264606fa5347a69e5743251ebf.gif');}
        else if (valeurgif === 2) {message.channel.send('https://i.gifer.com/UGb.gif');}
    }
}