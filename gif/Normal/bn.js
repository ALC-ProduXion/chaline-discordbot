module.exports = {
    name: "bn", //nom de la commande
    description: "Dit bonne nuit à tes amis ! (attention les GIF choisis sont cheloux) LA MYTHIQUE COMMANDE", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 7;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/visiteurs-bonne-nuit-gif-11732605');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/salto-back-flip-pergi-tidur-go-to-bed-bed-gif-12169908');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/bonne-nuit-puppy-roll-snug-blanket-gif-5034146');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/wacky-kiss-muah-mwah-good-night-gif-11427005');}
        else if (valeurgif === 5) {message.channel.send('https://i.imgur.com/dEBSIWz.gif?noredirect');}
        else if (valeurgif === 6) {message.channel.send('https://media1.tenor.com/images/2af00143731557a73020fb69624567c5/tenor.gif?itemid=10932607');}
        else if (valeurgif === 7) {message.channel.send('https://media2.giphy.com/media/JtMvYd1OFqdOpl09Qa/giphy.gif');}
    }
}