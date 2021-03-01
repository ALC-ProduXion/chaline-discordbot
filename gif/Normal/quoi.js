module.exports = {
    name: "quoi", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/efebe38067cab15d51b2db89f0c957bb/tenor.gif?itemid=8047951');}
    }
}