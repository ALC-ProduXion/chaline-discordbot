module.exports = {
    name: "cool", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 3;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://media.tenor.com/images/2934c8505fc798065d2fe2f703f37d63/tenor.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/42332d3c838e32abadbd9f27101ab459/tenor.gif');}
        else if (valeurgif === 3) {message.channel.send('https://media1.tenor.com/images/ff3530d06d25b739c88994893afb4f25/tenor.gif');}
    }
}