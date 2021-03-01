module.exports = {
    name: "tkt", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/0304ff2a784735ec57739f634152a006/tenor.gif?itemid=15026834');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/UnfoldedYellowishGharial-size_restricted.gif');}
    }
}