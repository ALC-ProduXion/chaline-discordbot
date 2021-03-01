module.exports = {
    name: "voila", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/5ac2274f15730f2414a809793cf20d31/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://64.media.tumblr.com/1c25d871633366aab5ce5e7f5a45e77e/tumblr_n3zl4nT4wJ1trnfcwo1_500.gif');}
    }
}