module.exports = {
    name: "moiaussi", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/def47ab4d9f380519b84f75f6e47f98e/tenor.gif');}
    }
}