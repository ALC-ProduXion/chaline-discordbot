module.exports = {
    name: "cquoicedev", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media0.giphy.com/media/3oz8xGk0bYUb7oxOog/200.gif');}
    }
}