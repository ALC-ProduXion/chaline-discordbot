module.exports = {
    name: "ironie", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.giphy.com/media/9MJ6xrgVR9aEwF8zCJ/giphy.gif');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/776539860994883654/tenor_40.gif');}
    }
}