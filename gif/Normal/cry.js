module.exports = {
    name: "cry", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/5dce9d8b88b8fb3816ca1c74462f7f78/tenor.gif');}
    }
}