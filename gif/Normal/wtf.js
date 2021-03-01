module.exports = {
    name: "wtf", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 5;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/confused-what-questionmark-gif-11552584');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/obama-wtf-why-president-wut-gif-12221156');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/umm-confused-wtf-blinking-okay-gif-7513882');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/blink-blinking-glasses-stare-gif-5182689');}
        else if (valeurgif === 5) {message.channel.send('https://media1.tenor.com/images/0feb0852af888f9d02c10d323cec504f/tenor.gif');}
    }
}