module.exports = {
    name: "nice", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/e643701b8766212d14f9c3b4bdb6e38c/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/805a626fb3d80207e5131d14302ec34f/tenor.gif?itemid=14556567');}
        else if (valeurgif === 3) {message.channel.send('https://thumbs.gfycat.com/PastGreedyCaribou-max-1mb.gif');}
    }
}