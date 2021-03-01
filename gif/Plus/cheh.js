module.exports = {
    name: "cheh", //nom de la commande
    description: "ça fait mal", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/cheh-slash-pose-vlog-streamer-gif-16912832');}
    }
}