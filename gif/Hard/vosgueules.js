module.exports = {
    name: "vosgueules", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media1.tenor.com/images/02d2c679c012cb6d8fb63cf118b30455/tenor.gif?itemid=15768791');}
    }
}