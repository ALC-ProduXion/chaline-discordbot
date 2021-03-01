module.exports = {
    name: "mrc", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/73d8381100c2218fb780d8faee73d021/tenor.gif?itemid=14858061');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/560512202776379403/772072388048191488/thks.gif');}
        else if (valeurgif === 3) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771817303619797032/giphy_9.gif');}
    }
}