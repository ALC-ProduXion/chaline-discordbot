module.exports = {
    name: "tubaises", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.pinimg.com/originals/bd/f3/4c/bdf34c25cd84931ea70230c024886e30.gif');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/PoshIncompatibleFurseal-small.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media.giphy.com/media/oeGgcmHVHLVCg/giphy.gif');}
    }
}