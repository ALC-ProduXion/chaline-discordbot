module.exports = {
    name: "quoique", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media0.giphy.com/media/l2JejTzwJcT3ZtTfW/200w_d.gif');}
    }
}