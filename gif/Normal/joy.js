module.exports = {
    name: "joy", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://www.gifmania.fr/Gif-Animes-Comics/Animations-Asterix-Gaulois/Images-Obelix/Obelix-17832.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/cdb327ec053535ce6c41b1c0f8bc4a7d/tenor.gif');}
    }
}