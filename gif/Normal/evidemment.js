module.exports = {
    name: "evidemment", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/b58199fcfae864bc70130635721cee6a/tenor.gif?itemid=3604021');}
    }
}