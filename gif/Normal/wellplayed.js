module.exports = {
    name: "wellplayed", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://img.devrant.com/devrant/rant/r_331348_bsnPZ.gif');}
    }
}