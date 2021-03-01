module.exports = {
    name: "cfun", //nom de la commande
    description: "c'est ironique", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771813299699843082/8441cc2013b993987930530fa39a0347.gif');}
    }
}