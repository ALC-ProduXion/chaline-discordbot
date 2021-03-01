module.exports = {
    name: "no", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/no-theoffice-stevecarrell-michaelscott-gif-4652931');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818396605743145/giphy_3.gif');}
    }
}