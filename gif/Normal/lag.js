module.exports = {
    name: "lag", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.discordapp.net/attachments/471995396709810187/720974122938531890/X5A9378.gif');}
    }
}