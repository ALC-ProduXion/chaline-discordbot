module.exports = {
    name: "cmd206", //nom de la commande
    description: "Le nombre de commandes que clem6528 à réécrit", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/AnchoredConsciousEastsiberianlaika-max-1mb.gif');}
    }
}