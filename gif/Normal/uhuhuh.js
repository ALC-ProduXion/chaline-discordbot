module.exports = {
    name: "uhuhuh", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/TenderBaggyFulmar-size_restricted.gif');}
    }
}