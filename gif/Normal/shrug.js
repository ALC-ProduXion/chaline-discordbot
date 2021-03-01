module.exports = {
    name: "shrug", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.pinimg.com/originals/64/67/20/64672078d9f9c0d94fba2f0c627251f2.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media2.giphy.com/media/fKk2I5iiWGN0I/200.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media1.tenor.com/images/5d636a9f91bbdb3563d09e3ae5ca0b4d/tenor.gif?itemid=12901459');}
    }
}