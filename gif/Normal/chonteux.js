module.exports = {
    name: "chonteux", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/PaleChubbyAntarcticgiantpetrel-size_restricted.gif');}
    }
}