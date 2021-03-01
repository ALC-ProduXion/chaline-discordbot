module.exports = {
    name: "hackerman", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/hacker-hackerman-kung-fury-gif-7953536');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/bob-le-bricoleur-dessin-annime-cartoon-reparateur-titre-gif-12896733');}
    }
}