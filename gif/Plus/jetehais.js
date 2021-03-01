module.exports = {
    name: "jetehais", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818241600651284/tumblr_ni0gtybhQZ1u69kl9o1_500.gif');}
    }
}