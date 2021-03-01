module.exports = {
    name: "slt", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/baby-yoda-baby-yoda-wave-baby-yoda-waving-hi-hello-gif-15975082');}
    }
}