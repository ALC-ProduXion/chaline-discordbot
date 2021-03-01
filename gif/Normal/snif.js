module.exports = {
    name: "snif", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://g1f.fr/image/1490970146-giphy.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/e601d2c7cbc86671a337238db9f29896/tenor.gif');}
    }
}