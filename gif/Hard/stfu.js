module.exports = {
    name: "stfu", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/shut-up-stfu-blah-blah-gif-13070641');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/31f26c54a0fcefc126316fea35aa8b2b/tenor.gif?itemid=14157019');}
    }
}