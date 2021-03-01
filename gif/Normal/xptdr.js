module.exports = {
    name: "xptdr", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media4.giphy.com/media/3oz8xxqLj3HpOlinyE/source.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/ec6a6debd8daddd5897be67c732cbf9f/tenor.gif?itemid=4839150');}
        else if (valeurgif === 3) {message.channel.send('https://i.gifer.com/NXTq.gif');}
    }
}