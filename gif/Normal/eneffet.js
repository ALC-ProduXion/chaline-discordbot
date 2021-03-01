module.exports = {
    name: "eneffet", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.makeagif.com/media/5-23-2018/pOlZDe.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/1ca65c749ab704bfad5eb004ae9c0d22/tenor.gif?itemid=5476425');}
    }
}