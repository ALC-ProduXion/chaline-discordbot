module.exports = {
    name: "beurk", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/bb4eac9a9e42ad02b774ce8cd1bcb9aa/tenor.gif?itemid=14688174');}
    }
}