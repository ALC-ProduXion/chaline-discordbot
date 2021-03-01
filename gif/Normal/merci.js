module.exports = {
    name: "merci", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/merci-thank-you-so-much-gif-5029965');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/merci-bien-cimer-gif-11983445');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/merci-cimer-meci-ci-frinitial-gif-9265485');}
    }
}