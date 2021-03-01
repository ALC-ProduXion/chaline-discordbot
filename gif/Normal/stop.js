module.exports = {
    name: "stop", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/slap-bears-stop-it-gif-12116830');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/stop-stahp-stopsign-smack-gif-5925433');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/wtf-stop-ahh-omg-gif-12709355');}
    }
}