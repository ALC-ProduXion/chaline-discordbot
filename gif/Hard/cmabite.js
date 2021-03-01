module.exports = {
    name: "cmabite", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/cestmabite-bite-mabite-leskassos-angry-gif-15928260');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/bang-gif-13453897');}
    }
}