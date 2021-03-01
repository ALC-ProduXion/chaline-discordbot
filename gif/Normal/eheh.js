module.exports = {
    name: "eheh", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://www.nwprogressive.org/weblog/wp-content/uploads/2019/11/NOV19-We-Are-Laughing-Eyman.gif');}
    }
}