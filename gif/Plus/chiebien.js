module.exports = {
    name: "chiebien", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://www.slate.fr/sites/default/files/simpsons-toilet-japan.gif');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/BlindWastefulBongo-size_restricted.gif');}
    }
}