module.exports = {
    name: "camarchepas", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://static.wixstatic.com/media/15f599_7ea8f0b03879474fb85904e57b29aba4~mv2.gif');}
    }
}