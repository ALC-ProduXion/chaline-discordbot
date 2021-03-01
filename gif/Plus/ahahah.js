module.exports = {
    name: "ahahah", //nom de la commande
    description: "sarcasme", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 5;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/764152847352725524/tenor_28.gif');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/726433934514192394/tenor_16.gif');}
        else if (valeurgif === 3) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/723227315605209158/tenor_10.gif');}
        else if (valeurgif === 4) {message.channel.send('https://64.media.tumblr.com/5c7ec9991b15741f15207f0221568e94/tumblr_odz2zm7PzM1tk76qio1_640.gif');}
        else if (valeurgif === 5) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771819057899896842/115936-full.gif');}
    }
}