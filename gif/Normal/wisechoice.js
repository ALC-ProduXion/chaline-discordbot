module.exports = {
    name: "wisechoice", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/wise-wise-choice-davie504-davie504wise-choice-wise-choice-davie504-gif-17823017');}
    }
}