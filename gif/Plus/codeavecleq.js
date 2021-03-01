module.exports = {
    name: "codeavecleq", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/je-code-avec-le-cul-ermite-moderne-voxmakers-gif-13342251');}
    }
}