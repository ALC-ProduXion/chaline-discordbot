module.exports = { //Modèle créé par MagicTINTIN (ALC ProduXion)
    name: "test", //nom de la commande
    description: "permet de tester", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('TEST 1');}
        else if (valeurgif === 2) {message.channel.send('TEST 2');}
    }
}