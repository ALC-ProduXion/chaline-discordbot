module.exports = { //Ajouté par Paria12 - Corrigé par MagicTINTIN(ALC-ProduXion)
    name: "rouquin",
    description: "jean-marie qui va faire courir un rouquin",
    execute(message) {
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1;
        if (valeurgif === 1){message.channel.send('https://gfycat.com/meagergranularcheetah');}
    }
}