module.exports = {
    name: "cad", //nom de la commande
    description: "c'est à dire", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/790c58e261452afb6314d83ba4277b2f/tenor.gif?itemid=17740919');}
    }
}