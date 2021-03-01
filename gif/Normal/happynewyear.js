module.exports = {
    name: "happynewyear", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/holidays-happy-holidays-new-year-new-years-eve-happy-new-year-gif-3577604');}
    }
}