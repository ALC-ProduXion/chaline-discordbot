module.exports = {
    name: "rage", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://thumbs.gfycat.com/DefenselessDiligentEel-size_restricted.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/81540bca9dc729cd55bdb2b3d7b6dd1e/tenor.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media.tenor.com/images/c8e29980517604c06c4fcae4e49dd31b/tenor.gif');}
    }
}