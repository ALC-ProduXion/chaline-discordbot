module.exports = {
    name: "saintecarotte", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media4.giphy.com/media/4LDZo9ZIn8stq/200.gif');}
    }
}