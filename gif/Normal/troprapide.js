module.exports = {
    name: "troprapide", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.gifer.com/P84S.gif');}
        else if (valeurgif === 2) {message.channel.send('https://i.imgur.com/999l9.gif?noredirect');}
        else if (valeurgif === 3) {message.channel.send('https://i.makeagif.com/media/10-14-2015/dmYbu6.gif');}
    }
}