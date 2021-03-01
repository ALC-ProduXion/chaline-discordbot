module.exports = {
    name: "shit", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.pinimg.com/originals/ba/15/e9/ba15e98ed65cba9e8ea900ec2ae97401.gif');}
    }
}