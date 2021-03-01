module.exports = { //Modèle 2 créé par MagicTINTIN (ALC ProduXion) 20210225
    name: "example", //nom de la commande                                                                                                                             -A MODIFIER
    description: "c'est une exemple", //description facultative sinon ""                                                                                              -A MODIFIER
    execute(message) {
        const giflist = [ // liste des gif                                                                                                                            -A MODIFIER
            "liengif1.gif", 
            "liengif2.gif" //ligne à suppr ou à duppliquer ATTENTION NE PAS OUBLIER LES ',' A LA FIN DE LA LIGNE C'EST UNE LISTE : NE PAS EN METTRE SUR LA DERNIERE !
            ];
        const gifchoisi = Math.round(Math.random() * (giflist.length)); //choisi un gif au hasard
        message.channel.send(giflist[gifchoisi]);
    }
}