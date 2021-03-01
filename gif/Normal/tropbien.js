module.exports = {
    name: "tropbien", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/8a53d678ed13284f681157fd5cb44e40/tenor.gif?itemid=9037594');}
        else if (valeurgif === 2) {message.channel.send('https://thumbs.gfycat.com/OffbeatRewardingAdder-size_restricted.gif');}
    }
}