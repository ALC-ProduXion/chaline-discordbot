module.exports = {
    name: "carotte", //nom de la commande
    description: "Le Légume (le concombre a été créé par la Carotte, c'est pour ça que c'est un fruit divin, enfin carottin)", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media0.giphy.com/media/oEsW4nBhNxikU/giphy.gif');}
    }
}