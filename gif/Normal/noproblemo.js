module.exports = {
    name: "noproblemo", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://www.gifimili.com/gif/2019/09/bart-no-problemo.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/3327d542949d36b8a9dcbcfbe0f65111/tenor.gif?itemid=4556019');}
    }
}