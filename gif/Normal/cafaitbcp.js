module.exports = {
    name: "cafaitbcp", //nom de la commande
    description: "ça fait beaucoup là non ?", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/62d058bba88ff7657b673ec7d11a14ce/tenor.gif');}
    }
}