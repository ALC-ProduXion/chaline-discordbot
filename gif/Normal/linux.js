module.exports = { //Modèle 2 créé par MagicTINTIN (ALC ProduXion) 20210225
    name: "linux",
    description: "Le systeme d'exploitation",
    execute(message) {
        const giflist = [
            "http://librepc.com/images/tux/penguinpower.gif"
            ];
        const gifchoisi = Math.round(Math.random() * (giflist.length)); //choisi un gif au hasard
        message.channel.send(giflist[gifchoisi]);
    }
}