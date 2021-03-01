module.exports = {
    name: "oof", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://images.squarespace-cdn.com/content/5d08c95134b7e10001e8bfb3/1560857204554-Q7FWLFDG3EUZ2ZPKBHHD/OOF-Blink.gif?content-type=image%2Fgif');}
    }
}