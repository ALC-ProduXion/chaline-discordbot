module.exports = {
    name: "thinking", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.giphy.com/media/lKXEBR8m1jWso/200.gif');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/BareRespectfulBarasinga-small.gif');}
    }
}