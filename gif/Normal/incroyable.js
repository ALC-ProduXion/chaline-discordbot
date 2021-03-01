module.exports = {
    name: "incroyable", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/93685f1a4ea5688ea6dee44b37e44b55/tenor.gif?itemid=11822105');}
        else if (valeurgif === 2) {message.channel.send('https://risibank.fr/cache/stickers/d1719/171911-full.gif');}
    }
}