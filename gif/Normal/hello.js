module.exports = {
    name: "hello", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://www.ballajack.com/wp-content/uploads/2010/09/hello-bear.gif');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/EqualSmugArrowworm-size_restricted.gif');}
    }
}