module.exports = {
    name: "mindblowing", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media3.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media3.giphy.com/media/5wWf7Hi5aXu3JiXXwli/200.gif');}
        else if (valeurgif === 3) {message.channel.send('https://cdn.discordapp.com/attachments/720970045932437556/772156688273899520/mindblowingSlpiknot.gif');}
    }
}