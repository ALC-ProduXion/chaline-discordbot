module.exports = {
    name: "lmao", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/thats-very-funny-davie504-bassist-bass-funny-gif-16608317');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/davie504-lmao-stare-serious-laugh-gif-16271694');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/lmao-laughing-my-ass-off-lol-gif-16410563');}
    }
}