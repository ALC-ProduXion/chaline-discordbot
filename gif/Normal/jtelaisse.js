module.exports = {
    name: "jtelaisse", //nom de la commande
    description: "", //description facultative sinon ""
    execute(message) {
        //------------------------------------INIT
        nbgifs = 2;
        valeurgif = Math.floor(Math.random() * nbgifs) + 1 ;
        if (valeurgif === 1) {message.channel.send('https://64.media.tumblr.com/1e4b0a6c54897624d795c41c25da3ff2/9c89bc476976f3a5-e5/s500x750/09f2565545180b6c1dd60c35e9a8f67c0ac14bde.gifv');}
        else if (valeurgif === 2) {message.channel.send('https://media1.tenor.com/images/b1dd482b4ced91e434bb8c861681c17a/tenor.gif?itemid=13848683');}
    }
}