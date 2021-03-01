module.exports = {
    name: "cc", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/well-hello-there-pay-attention-gif-9340416');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/booba-coucou-tu-veux-voir-gif-7276133');}
    }
}