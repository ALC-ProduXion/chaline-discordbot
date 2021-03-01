module.exports = {
    name: "hey", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.giphy.com/media/5xtDarEbygs3Pu7p3jO/giphy.gif');}
    }
}