module.exports = {
    name: "money", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/MiniatureMellowCornsnake-size_restricted.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media4.giphy.com/media/2VYui7kj5C5I4/giphy.gif');}
    }
}