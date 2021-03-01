module.exports = {
    name: "chut", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.pinimg.com/originals/fe/eb/1a/feeb1a3c32d6909dfca644f996487467.gif');}
    }
}