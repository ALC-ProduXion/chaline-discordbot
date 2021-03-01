module.exports = {
    name: "ohsamaman", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/9e29ec4cbee839254dd59a8680a7f903/tenor.gif');}
    }
}