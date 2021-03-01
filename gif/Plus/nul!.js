module.exports = {
    name: "nul", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 6;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771713722480721940/3uz86R.gif');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771713814613852190/tenor_8.gif');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/antoine_daniel_de_la_merde-light-gif-14861154');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/merde-antoine-daniel-whatthecut-frinitial-gif-5029464');}
        else if (valeurgif === 5) {message.channel.send('https://tenor.com/view/la-vache-la-vache-mais-cest-nul-cest-nul-nul-kaamelott-gif-16845670');}
        else if (valeurgif === 6) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771819236255465512/tenor_4.gif');}
    }
}