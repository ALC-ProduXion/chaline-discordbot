module.exports = {
    name: "meh", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media2.giphy.com/media/xT5LMEcHRXKXpIHCCI/200.gif');}
    }
}