module.exports = {
    name: "mdp",
    description: "on le stocke pas sur une clé qu'on prête dans un fichier mdp.txt",
    execute(message) {
        const giflist = [
            "https://images.frandroid.com/wp-content/uploads/2018/03/password.gif", 
            "https://i.imgur.com/2IoTbZd.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}