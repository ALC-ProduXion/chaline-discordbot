module.exports = {
    name: "stefaucillestmarteau", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media3.giphy.com/media/l3UcuXnfhtQ3yt62k/giphy.gif');}
    }
}