module.exports = {
    name: "run", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media0.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif');}
    }
}