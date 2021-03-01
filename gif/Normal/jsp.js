module.exports = {
    name: "jsp", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/6f7993145667507837ad8a994d5b4772/tenor.gif?itemid=11061431');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/49fb4ac520a21e8ef29c9d8ddd771aba/tenor.gif?itemid=12859870');}
        else if (valeurgif === 3) {message.channel.send('https://i.pinimg.com/originals/dc/81/d7/dc81d7077a9fe36f2aa11aa2ce212f44.gif');}
    }
}