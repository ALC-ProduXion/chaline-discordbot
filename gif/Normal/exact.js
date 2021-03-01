module.exports = {
    name: "exact", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/AchingVigilantAlaskanhusky-max-1mb.gif');}
        else if (valeurgif === 2) {message.channel.send('https://i.imgur.com/OTtRNq1.gif');}
    }
}