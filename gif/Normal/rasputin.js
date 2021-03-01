module.exports = {
    name: "rasputin", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/241b561570a5ac8e9b2643a8dab80158/tenor.gif?itemid=9660788');}
    }
}