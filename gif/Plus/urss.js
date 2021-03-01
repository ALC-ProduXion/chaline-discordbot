module.exports = {
    name: "urss", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/1f8af0915dcaf3896f785fca43809b2c/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/HeftyEsteemedApatosaur-max-14mb.gif');}
    }
}