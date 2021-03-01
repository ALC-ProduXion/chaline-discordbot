module.exports = {
    name: "pognon", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 4;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/141b42ba5777f2415f0a11ebc55bfbb1/tenor.gif?itemid=16805029');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/CalmAlienatedCanvasback-max-1mb.gif');}
        else if (valeurgif === 3) {message.channel.send('https://i.pinimg.com/originals/70/97/6a/70976a7cefb64167026862e2358c671a.gif');}
        else if (valeurgif === 4) {message.channel.send('https://i.pinimg.com/originals/b7/55/8f/b7558f3ea31c87b9bd3acf0877697acd.gif');}
    }
}