module.exports = {
    name: "bref", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/1156a33fb3cf3038d08084d92ce4192e/tumblr_oudfndgIdB1tk76qio1_400.gifv');}
    }
}