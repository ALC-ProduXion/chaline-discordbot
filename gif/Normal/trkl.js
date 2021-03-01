module.exports = {
    name: "trkl", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/938fcbe649ca9925e8385bdf2d2878c8/tenor.gif?itemid=11982550');}
        else if (valeurgif === 2) {message.channel.send('https://i.pinimg.com/originals/ac/7c/11/ac7c11c6b5f3b0f86adb5ac910caefb3.gif');}
    }
}