module.exports = {
    name: "stecarotte", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://www.jedecore.com/gif/carotte/carotte-costaud.gif');}
    }
}