module.exports = {
    name: "onsefaitchier", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/everyday-goals-gif-5517808');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/bored-cats-lazy-playing-me-today-gif-16611129');}
    }
}