module.exports = {
    name: "rofl", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/BlindFreshGlobefish-small.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/0cac4b0df2a772e9f4dbeef0e76bfee7/tenor.gif?itemid=15388239');}
        else if (valeurgif === 3) {message.channel.send('https://thumbs.gfycat.com/DefenselessSecondaryHoneyeater-max-1mb.gif');}
    }
}