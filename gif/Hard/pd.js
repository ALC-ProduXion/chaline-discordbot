module.exports = { //Ajouté par Paria12 - Corrigé par MagicTINTIN(ALC-ProduXion)
    name: "pd",
    description: "jean-marie qui dit pd",
    execute(message) {
        nbgifs = 1;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1;
        if (valeurgif === 1){message.channel.send('https://i.makeagif.com/media/9-02-2018/86Ju0W.gif');}
    }
}