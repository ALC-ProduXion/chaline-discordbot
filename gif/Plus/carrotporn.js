module.exports = {
    name: "carrotporn", //nom de la commande
    description: "Réservée aux croyants de la Sainte Carotte", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/vegan-porn-carrot-porn-happy-gif-14676153');}
    }
}