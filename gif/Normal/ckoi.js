module.exports = {
    name: "ckoi", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/sylvain-durif-christ-cosmique-wow-truc-durif-gif-15247775');}
    }
}