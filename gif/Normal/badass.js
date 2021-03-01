module.exports = {
    name: "badass", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/5920787b96911f64b46a569062900042/tenor.gif');}
    }
}