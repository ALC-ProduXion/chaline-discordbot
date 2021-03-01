module.exports = {
    name: "troppris", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 4;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://i.pinimg.com/originals/e5/c9/52/e5c952a19f1eb1cc1b23c077893c0c10.gif');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/6008011e66fa05f3e305d4bb94a3ed8f/tenor.gif?itemid=15722930');}
        else if (valeurgif === 3) {message.channel.send('https://thumbs.gfycat.com/HugeHealthyGoldenretriever-size_restricted.gif');}
        else if (valeurgif === 4) {message.channel.send('https://cdn.discordapp.com/attachments/662341875616972821/771818855210942494/172046-full.gif');}
    }
}