module.exports = {
    name: "blender", //nom de la commande
    description: "Le grand et vénérable logiciel", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.gifer.com/YGhv.gif');}
    }
}