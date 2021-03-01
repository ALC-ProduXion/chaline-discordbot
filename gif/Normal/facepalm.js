module.exports = {
    name: "facepalm", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 4;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/facepalm-kermit-gif-13779445');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/facepalm-seriously-exasperated-gif-7304550');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/facepalm-really-stressed-mad-angry-gif-16109475');}
        else if (valeurgif === 4) {message.channel.send('https://25.media.tumblr.com/96d1ceed24e4aefb4ac41c4d1d1cb3a5/tumblr_n0pgwcVK4t1rb2l1co1_400.gif');}
    }
}