module.exports = {
    name: "sob", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://cdn.lowgif.com/full/5567038cba7d75ce-.gif');}
        else if (valeurgif === 2) {message.channel.send('https://i0.wp.com/www.frenchstyleabroad.com/wp-content/uploads/2017/01/Patrick.gif?resize=300%2C249');}
    }
}