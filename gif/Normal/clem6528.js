module.exports = {
    name: "clem6528", //nom de la commande
    description: "Notre plus gros contributeur (et ce n'est pas par rapport à sa taille)", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {
            message.channel.send('Énooormme merci à **clem6528** pour sa contribution à la rééciture des commandes de gifs, il a écrit plus de **206 commandes !!!**');
            message.channel.send('https://tenor.com/view/car-boom-roasted-csi-gif-14069995');
        }
    }
}