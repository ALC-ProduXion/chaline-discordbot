module.exports = {
    name: "42", //nom de la commande
    description: "La commande des créateurs du principe de commande à gif", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/705417681335091211/749356756953464975/godgif-lite.gif');} //https://cdn.discordapp.com/attachments/705417681335091211/749356756953464975/godgif-lite.gif
    }
}