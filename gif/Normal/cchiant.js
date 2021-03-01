module.exports = {
    name: "cchiant", //nom de la commande
    description: "Dis nous qd c chiant", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/52d3fa2f1a62491d7a0892498595378b/tenor.gif?itemid=5112483');}
    }
}