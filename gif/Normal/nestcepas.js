module.exports = { //Ajouté par Paria12 - Corrigé par MagicTINTIN(ALC-ProduXion)
    name: "nestcepas",
    description: "jean-marie qui dit n'est-ce pas",
    execute(message) {
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1;
        if (valeurgif === 1){message.channel.send('https://media1.tenor.com/images/5a5028df043a232c7c7bce1ff9a3996b/tenor.gif?itemid=16426664');}
    }
}