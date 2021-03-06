module.exports = {
    name: "chao", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/imout-bye-gif-4989183');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/explosion-parrot-gif-10948328');}
        else if (valeurgif === 2) {message.channel.send('https://media.discordapp.net/attachments/561952367298347019/749322334917099560/bird.gif');}
    }
}