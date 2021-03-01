module.exports = {
    name: "aurevoir", //nom de la commande
    description: "Dit au revoir à tes amis ! (attention les GIF utiliser sont cheloux)", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 5;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/goodbye-homer-gif-10101012');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/au-revoir-gif-10531506');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/bear-hug-wave-bye-gif-12388210');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/aurevoir-giscard-gif-8694788');}
        else if (valeurgif === 5) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771817924948263023/CarefreeWhoppingFluke-max-1mb.gif');}
    }
}