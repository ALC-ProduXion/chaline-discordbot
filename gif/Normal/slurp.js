module.exports = {
    name: "slurp", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.gifer.com/1bjy.gif');}
        else if (valeurgif === 2) {message.channel.send('https://i.pinimg.com/originals/a6/e5/fc/a6e5fc430556636563e06b2fa0b99d4e.gif');}
    }
}