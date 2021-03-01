module.exports = {
    name: "n1", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('La commande n1 est un easter egg, une carte légendaire de !ksp *ps : si vous êtes admin vous pouvez faire !n2*');}
    }
}