module.exports = {
    name: "sel", 
    description: "quand enzo rage trop", 
    execute(message) {
        const giflist = [ 
            "https://tenor.com/view/salty-heath-ledger-the-dark-knight-dark-knight-why-so-salty-gif-6124623", 
            "https://tenor.com/view/salttruck-gif-8448136",
            "https://media1.tenor.com/images/5a7e8ed5266f941196a5ff593ffb3f39/tenor.gif?itemid=17045018"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}