module.exports = {
    name: "oui", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/0706bde26220e03dd72f3be8400d4a58/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.giphy.com/media/3oz8xHpIFb5NO2Exl6/giphy.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media.tenor.com/images/4b855b6dc4932f469eb21e9ca36aedc7/tenor.gif');}
    }
}