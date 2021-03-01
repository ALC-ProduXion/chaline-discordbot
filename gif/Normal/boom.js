module.exports = {
    name: "boom", //nom de la commande
    description: "La commande épiquement épique", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/nuclear-tnt-bomb-explode-usa-gif-12917200');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/explode-explosion-gif-13727381');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/grumpy-cat-tarder-sauce-tarder-the-cat-worst-christmas-ever-explosion-gif-4250507');}
    }
}