module.exports = {
    name: "bravo", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/leonardo-dicaprio-clap-slow-clap-good-job-nice-one-gif-14556567');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/724609713156915301/photofunky.gif');}
    }
}