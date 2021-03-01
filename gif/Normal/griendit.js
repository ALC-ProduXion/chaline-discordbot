module.exports = {
    name: "griendit", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://lh3.googleusercontent.com/proxy/3S4Iio-4V8NzLaNTDXJ8YIeQdxRQcB3AmnSiDHWT_TiUWtHoCTtPZWChG3DfvdUpVbMa8zlYq95b4KCYcdwTf7yeXMGBt3SWzRsg');}
        else if (valeurgif === 2) {message.channel.send('https://media.tenor.com/images/baa23261c1cbbe2f0b31f7973f729c18/tenor.gif');}
    }
}