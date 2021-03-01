module.exports = {
    name: "ciao", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/2f8ce9651489d9672005bffcdda19560/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/ed06a57e1a9ac68bc80295b3e2859734/tenor.gif?itemid=13830351');}
    }
}