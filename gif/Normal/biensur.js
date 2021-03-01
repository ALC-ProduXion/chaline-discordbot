module.exports = {
    name: "biensur", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.discordapp.net/attachments/662341875616972821/723227616240205824/tumblr_inline_o08mwsH1Ad1tqr29l_500.gif');}
    }
}