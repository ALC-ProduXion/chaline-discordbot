module.exports = {
    name: "ksp", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 11;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://giphy.com/gifs/memecandy-mA0gKc6L1CFCH2ujku');}
        else if (valeurgif === 2) {message.channel.send('https://giphy.com/gifs/misfitsandmonsters-trutv-misfits-and-monsters-bmm107-MVgLEacpr9KVK172Ne');}
        else if (valeurgif === 3) {message.channel.send('https://giphy.com/gifs/memecandy-PllywbBvFRsDgqCBuS');}
        else if (valeurgif === 4) {message.channel.send('https://giphy.com/gifs/ariane-5-software-bug-rocket-YqWdjFCg5igsXDF9W2');}
        else if (valeurgif === 5) {message.channel.send('https://giphy.com/gifs/europeanspaceagency-stars-space-science-technology-kfFJ4cZGlNGzRILfpW');}
        else if (valeurgif === 6) {message.channel.send('https://giphy.com/gifs/space-rocket-mi6DsSSNKDbUY');}
        else if (valeurgif === 7) {message.channel.send('https://giphy.com/gifs/space-physics-k0CJuMw9h7m3S');}
        else if (valeurgif === 8) {message.channel.send('https://giphy.com/gifs/space-rocket-launch-3ohs4rclkSSrNGSlFK');}
        else if (valeurgif === 9) {message.channel.send('https://giphy.com/gifs/nasa-nasagifs-launchamerica-d83OE0uPWpH6M4sjtU');}
        else if (valeurgif === 10) {message.channel.send('https://i.imgur.com/8dzaIoZ.gif');}
        else if (valeurgif === 11) {message.channel.send('**Félicitations {user.idname} tu as eu le gif légendaire de la N1 dans un *ksp surprise* !!!** https://cdn.discordapp.com/attachments/720970045932437556/771752839860846642/n1legendairelite.gif');}
    }
}