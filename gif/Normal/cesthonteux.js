module.exports = {
    name: "cesthonteux", //nom de la commande
    description: "VRAIMENT", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.discordapp.net/attachments/684777805900546065/724362410236051516/image0.gif');}
    }
}