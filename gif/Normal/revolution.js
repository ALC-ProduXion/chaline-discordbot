module.exports = {
    name: "revolution", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/545590ed477151346e027964483ed651/tumblr_myr8aiuLSd1sl0jvpo3_250.gifv');}
    }
}