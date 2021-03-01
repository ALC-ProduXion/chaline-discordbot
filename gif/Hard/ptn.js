module.exports = {
    name: "ptn", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/dcaf788637f3b9b9bb9dc1a8e918e1a0/tenor.gif?itemid=5029611');}
        else if (valeurgif === 2) {message.channel.send('https://j.gifs.com/VA2K0z.gif');}
        else if (valeurgif === 3) {message.channel.send('https://i.imgur.com/rUmqNCL.gif');}
    }
}