module.exports = {
    name: "tg", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 14;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/abuse-tais-toi-tg-stop-gif-16694882');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/davechapelle-shut-up-shut-the-fuck-ip-stfu-speech-gif-4994050');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/alain-finkielkraut-fermez-vos-gueules-taisez-vous-gif-10479320');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/jdg-joueur-du-grenier-ta-gueule-shut-up-gif-13793318');}
        else if (valeurgif === 5) {message.channel.send('https://tenor.com/view/ta-gueule-tagueule-ferme-la-gif-5034362');}
        else if (valeurgif === 6) {message.channel.send('https://tenor.com/view/ta-gueule-tagueule-ferme-la-gif-5034357');}
        else if (valeurgif === 7) {message.channel.send('https://tenor.com/view/ta-gueule-tagueule-ferme-la-gif-5034386');}
        else if (valeurgif === 8) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771873129051455508/tenor_34.gif');}
        else if (valeurgif === 9) {message.channel.send('https://tenor.com/view/ferme-ta-gueule-ta-gueule-ferme-la-ftg-tg-gif-5482735');}
        else if (valeurgif === 10) {message.channel.send('https://tenor.com/view/daniel-cohn-bendit-gilbert-collard-ferme-ta-gueule-connard-ta-gueule-gif-15958912');}
        else if (valeurgif === 11) {message.channel.send('https://media.tenor.com/images/a89645334eb2360633f65d12373d72f4/tenor.gif');}
        else if (valeurgif === 12) {message.channel.send('https://tenor.com/view/shhh-quite-stop-wait-shush-gif-14462328');}
        else if (valeurgif === 13) {message.channel.send('https://tenor.com/view/davie504-fuck-fuck-you-bass-player-gif-13940452');}
        else if (valeurgif === 14) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818973935042570/4GkYZJ.gif');}
    }
}