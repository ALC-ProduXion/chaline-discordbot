module.exports = {
    name: "checkmate", //nom de la commande
    description: "Davie504 intensifies", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/davie504-checkmate-chess-gif-15254912');}
    }
}