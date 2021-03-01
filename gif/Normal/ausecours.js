module.exports = { //Ajouté par Paria12 - Corrigé par MagicTINTIN(ALC-ProduXion)
    name: "ausecours",
    description: "jm qui cire au secours",
    execute(message) {
        nbgifs = 1
        valeurgif = Math.floor(Math.random() * nbgifs) + 1;
        if (valeurgif === 1){message.channel.send('https://tenor.com/view/alede-jeanne-au-secours-yelling-angry-mad-gif-17526175');}
    }
}