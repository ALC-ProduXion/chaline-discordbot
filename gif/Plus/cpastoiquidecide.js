module.exports = {
    name: "cpastoiquidecide", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/772039783189839902/tenor_3.gif');}
    }
}