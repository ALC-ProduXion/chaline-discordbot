module.exports = {
    name: "bienjoue", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/22e29484b999038e1c3bddfba7fbbd9b/tenor.gif');}
    }
}