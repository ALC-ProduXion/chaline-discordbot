module.exports = {
    name: "pipeau", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.makeagif.com/media/3-21-2018/sOd-pa.gif');}
    }
}