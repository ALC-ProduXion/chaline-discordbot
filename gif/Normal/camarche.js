module.exports = {
    name: "camarche", //nom de la commande
    description: "ahah une blague de qualité", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/9f16b3d4c67e4ea8143e03eb487ed91d/tenor.gif?itemid=14221484');}
    }
}