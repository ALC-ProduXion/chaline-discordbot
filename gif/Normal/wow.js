module.exports = {
    name: "wow", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 4;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/exploding-boom-explosion-mind-blowing-gif-10728578');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/wowmeme-wow-gif-5435391');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/really-wow-gif-8229019');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/doc-zeus-nom-de-zeus-retour-vers-le-futur-amazed-gif-16253562');}
    }
}