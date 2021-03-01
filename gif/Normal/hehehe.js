module.exports = {
    name: "hehehe", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/32ef79c669142a5d271a9a8bfc4be545/tenor.gif?itemid=9700566');}
    }
}