module.exports = {
    name: "youpi", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.giphy.com/media/iJgoGwkqb1mmH1mES3/200.gif');}
        else if (valeurgif === 2) {message.channel.send('https://4.bp.blogspot.com/-OtwJGSaG0tc/UcysT7cIIvI/AAAAAAAAjd4/YHkdNHdEr40/s303/letsdance31.gif');}
    }
}