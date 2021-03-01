module.exports = {
    name: "grienvu", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/ce238135b82dd3a8fbdfe968414144c3/tenor.gif?itemid=12277986');}
    }
}