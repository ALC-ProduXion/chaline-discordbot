module.exports = {
    name: "bnfinal", //nom de la commande
    description: "Dis bonne nuit une bonne fois pour toute", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/705417681335091211/749380594885984397/bonnenuitfinal.gif');}
    }
}