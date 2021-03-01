module.exports = {
    name: "kaboom", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/megumin-konosuba-explosion-meledak-ledakan-gif-12327270');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/kaboom-bongo-cat-explosion-gif-15030119');}
    }
}