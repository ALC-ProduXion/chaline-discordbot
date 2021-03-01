module.exports = {
    name: "perfect", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 4;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/elmer-thumbs-up-gif-7569635');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/hangover-thumbs-up-zach-galifianakis-gif-3576876');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/sponge-bob-thumbs-up-good-job-great-cool-gif-13953452');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/thumbsup-internet-computer-good-funny-gif-3551491');}
    }
}