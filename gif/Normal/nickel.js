module.exports = {
    name: "nickel", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://data.whicdn.com/images/71722545/original.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media0.giphy.com/media/W2R603BpNZwjeb9eDy/giphy.gif');}
    }
}