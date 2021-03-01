module.exports = {
    name: "tuezmoi", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/kill-me-die-gif-11470710');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/3dacff86cefe2a2626450cfccd6ed23a/tenor.gif');}
    }
}