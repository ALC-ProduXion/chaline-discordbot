module.exports = {
    name: "bahoui", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/4ff13f744e4599b0d413667855469354/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/d0c78b4a5caa374cff10213ab70d0011/tenor.gif?itemid=10995336');}
    }
}