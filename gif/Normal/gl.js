module.exports = {
    name: "gl", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 5;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://tenor.com/view/bonne-chance-gif-10042426');}
        else if (valeurgif === 2) {message.channel.send('https://tenor.com/view/three-finger-salute-good-luck-jennifer-lawrence-katniss-everdeen-hunger-games-gif-14699764');}
        else if (valeurgif === 3) {message.channel.send('https://tenor.com/view/good-fricken-luck-yeah-right-sarcastic-unlikely-good-luck-gif-14502475');}
        else if (valeurgif === 4) {message.channel.send('https://tenor.com/view/bonne-chance-lsf-lsf-usm67-sign-language-good-luck-gif-15418314');}
        else if (valeurgif === 5) {message.channel.send('https://tenor.com/view/spongebob-squarepants-patrick-star-im-rooting-for-you-cheer-cheering-gif-5104276');}
    }
}