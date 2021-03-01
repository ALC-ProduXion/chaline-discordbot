module.exports = {
    name: "cfou", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/8fc292a85f65cfbe7a61d5d9e4bc95c9/tenor.gif?itemid=8048197');}
    }
}