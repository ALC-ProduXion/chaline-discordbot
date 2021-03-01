module.exports = {
    name: "meneither", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media3.giphy.com/media/xTeV7C2Tp2jnZUVuxO/giphy.gif');}
    }
}