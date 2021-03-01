module.exports = {
    name: "help", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media3.giphy.com/media/J3AqChMvL5C4iEkxDK/giphy.gif');}
    }
}