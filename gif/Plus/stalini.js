module.exports = {
    name: "stalini", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://lacapsulotheque.files.wordpress.com/2020/09/staline.gif');}
    }
}