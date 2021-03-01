module.exports = {
    name: "mdr", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/risitas-dentadura-excited-happy-laugh-giggle-gif-13601656');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/rire-rigoler-marrer-nicolas-sarkozy-gif-5242881');}
        else if (valeurgif === 3) {message.channel.send('https://media.discordapp.net/attachments/662341875616972821/725070609960271992/ZestyPertinentCat-size_restricted.gif');}
    }
}