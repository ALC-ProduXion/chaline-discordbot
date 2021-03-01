module.exports = {
    name: "fuyezpauvresfous", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.giphy.com/media/rBblrZDuvOaJi/giphy.gif');}
    }
}