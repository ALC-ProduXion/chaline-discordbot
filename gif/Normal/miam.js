module.exports = {
    name: "miam", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.gifer.com/IUXj.gif');}
        else if (valeurgif === 2) {message.channel.send('https://www.jedecore.com/gif/asterix-et-obelix/obelix.gif');}
    }
}