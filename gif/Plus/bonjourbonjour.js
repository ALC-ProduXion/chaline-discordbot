module.exports = {
    name: "bonjourbonjour", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/bonjour-hello-oss117-jean-dujardin-hubert-bonisseur-de-la-bath-gif-13920747');}
    }
}