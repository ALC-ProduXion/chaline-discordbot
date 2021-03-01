module.exports = {
    name: "spacex", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/spacex-starship-starship-sn8-sn8-rocket-gif-19509098');}
        else if (valeurgif === 2) {message.channel.send('https://cdn.discordapp.com/attachments/684777805900546065/806271747401449522/sn9-4.gif');}
    }
}