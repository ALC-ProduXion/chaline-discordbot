module.exports = {
    name: "prout", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/65295af653e7f1779e0802d513f9ac02/tenor.gif?itemid=16673288');}
    }
}