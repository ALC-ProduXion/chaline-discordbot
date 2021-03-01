module.exports = {
    name: "lol", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/minionslol-gif-4519855');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/ahhhh-well-yeahnothanks-whatyoutalkinboutwillis-gif-8693695');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/laugh-lol-rofl-laughing-ketawa-gif-10164703');}
    }
}