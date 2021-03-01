module.exports = {
    name: "omg", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771817837320208384/tumblr_mzo9utkHTz1s5ej2zo3_400.gif');}
        else if (valeurgif === 3) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771817053132029982/tenor_29.gif');}
    }
}