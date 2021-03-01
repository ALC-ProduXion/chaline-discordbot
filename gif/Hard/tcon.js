module.exports = {
    name: "tcon", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/quel-con-con-gif-12593881');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/con-enfoire-gif-5035209');}
        else if (valeurgif === 3) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818490796965933/tumblr_9e0550f51f79e3c2f866ce5387f8c910_a947d0db_400.gif');}
    }
}