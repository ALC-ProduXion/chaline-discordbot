module.exports = {
    name: "bordel", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/5bb52ef6305c1e1e7eef9e971c75c7d2/tenor.gif?itemid=14183571');}
        else if (valeurgif === 2) {message.channel.send('https://media1.giphy.com/media/l0HlTyjbjbv9qabCM/200.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media1.tenor.com/images/644e1c7138560b8908a74941177c0166/tenor.gif?itemid=5029665');}
    }
}