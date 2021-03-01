module.exports = {
    name: "bonnedouche", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://data.photofunky.net/output/image/a/c/9/9/ac993d/photofunky.gif');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/TimelyPlainCricket-small.gif');}
        else if (valeurgif === 3) {message.channel.send('https://i.pinimg.com/originals/fc/bb/22/fcbb2286760f4c51dc3c2775c6266b98.gif');}
    }
}