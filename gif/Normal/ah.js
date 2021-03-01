module.exports = {
    name: "ah", //nom de la commande
    description: "Denis ?", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/ah-denis-brognart-tf1-koh-gif-7256068');}
    }
}