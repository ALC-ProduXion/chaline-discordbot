module.exports = {
    name: "yes", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/3c899f1fa83c0e3a3cf45d23a0f7a5dd/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media4.giphy.com/media/Ld0P4AdeSDjoY/giphy.gif');}
    }
}