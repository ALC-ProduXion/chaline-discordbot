module.exports = {
    name: "zut", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.makeagif.com/media/11-19-2019/xLC_SE.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/d003d72ceb496f9e7110dc3c4467ba18/tenor.gif?itemid=14656207');}
    }
}