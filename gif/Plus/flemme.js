module.exports = {
    name: "flemme", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/keeping-up-with-the-kardashians-kuwtk-kim-kardashian-bed-sleep-gif-4927402');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/polar-bear-crawling-bear-getting-out-of-bed-be-like-cute-polar-bear-gif-5234334');}
    }
}