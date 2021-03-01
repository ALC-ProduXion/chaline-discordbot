module.exports = {
    name: "ptdr", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/3372a43626ac121c4a7f9b7306e95e75/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/bfcb305949e67e91f49af2eff0561507/tenor.gif');}
    }
}