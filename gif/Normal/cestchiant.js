module.exports = {
    name: "cestchiant", //nom de la commande
    description: "Dis nous qd c chiant (ou cchiant)", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/ff7e91bc3bc3e9e93656c15891ddd6da/tumblr_o8f3odSJA11tk76qio2_500.gif');}
    }
}