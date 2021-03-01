module.exports = {
    name: "powerrangers", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370336/big-5370336807.gif?v=15');}
    }
}