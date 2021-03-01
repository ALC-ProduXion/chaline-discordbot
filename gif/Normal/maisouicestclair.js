module.exports = {
    name: "maisouicestclair", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/oui-oue-eddy-malou-gif-5034006');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771817682483150869/da62cz2-843236d0-28f7-433e-8369-6367f68687cc.gif');}
    }
}