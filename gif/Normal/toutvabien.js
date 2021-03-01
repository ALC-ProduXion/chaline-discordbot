module.exports = {
    name: "toutvabien", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/AngryGoldenIsabellinewheatear-size_restricted.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media2.giphy.com/media/z9AUvhAEiXOqA/giphy.gif');}
    }
}