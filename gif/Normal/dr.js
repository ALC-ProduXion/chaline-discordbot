module.exports = {
    name: "dr", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/president-obama-youre-welcome-pissed-gif-4322968');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/whatever-no-problem-psssh-gif-3447964');}
    }
}