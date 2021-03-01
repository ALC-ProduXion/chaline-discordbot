module.exports = {
    name: "ohohoh", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoModFWsmnVGqSukRVNFcdo0zNNmro6kFlhLN4itLEJQ&usqp=CAU&ec=45714077');}
    }
}