module.exports = {
    name: "ahah", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://gifimage.net/wp-content/uploads/2017/07/haha-gif-13.gif');}
    }
}