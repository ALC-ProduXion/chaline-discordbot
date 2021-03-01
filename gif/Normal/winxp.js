module.exports = {
    name: "winxp", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/pc-burned-gif-14847105');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/capoo-bugcat-pc-error-work-gif-11667435');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/angry-panda-mascot-mad-gif-3456638');}
    }
}