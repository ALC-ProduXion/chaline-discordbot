module.exports = {
    name: "jasais", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/7c6b9b8959cedf17037511e138fe1c85/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/0e9071009dc6bbb493904533d3eaca7d/tenor.gif?itemid=5289156');}
    }
}