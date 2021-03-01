module.exports = {
    name: "yeah", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 6;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media3.giphy.com/media/tItIlCGySM0ieKKW6b/200.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/e92e9595d1958aa3d71d1794354e1321/tenor.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media1.tenor.com/images/105dc822ced1fe750b0b2dce8149cd68/tenor.gif');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/yeesss-like-happy-heureux-antoine-daniel-gif-18628745');}
        else if (valeurgif === 5) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818138374635541/source.gif');}
        else if (valeurgif === 6) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/776539723912183838/tenor_39.gif');}
    }
}