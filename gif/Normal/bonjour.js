module.exports = {
    name: "bonjour", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 4;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/mr-bean-funny-hello-hi-wave-gif-3528683');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/hello-funny-wave-chicken-gif-13330039');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/bad-teeth-hi-hello-wave-gif-14630063');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818155579670540/source_1.gif');}
    }
}