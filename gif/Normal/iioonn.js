module.exports = {
    name: "iioonn", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://images.anandtech.com/doci/11425/Games-8-F12019.gif');}
    }
}