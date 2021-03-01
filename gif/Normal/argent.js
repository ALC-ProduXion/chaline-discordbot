module.exports = {
    name: "argent", //nom de la commande
    description: "Si toi aussi t'aimes l'argent", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i2.wp.com/personalfinancenews.com/wp-content/uploads/2017/03/money-gif-3.gif?resize=510%2C287&ssl=1');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/9c70f773d622e4d30e1e9c7158e77ba0/tenor.gif?itemid=13932175');}
    }
}