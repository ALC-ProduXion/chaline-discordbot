module.exports = {
    name: "memecegif", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i0.wp.com/boingboing.net/wp-content/uploads/2015/05/tavis.gif?resize=500%2C420');}
    }
}