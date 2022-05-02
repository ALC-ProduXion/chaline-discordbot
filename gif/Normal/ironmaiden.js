module.exports = {
    name: "ironmaiden", 
    description: "c'est iron maiden ", 
    execute(message) {
        const giflist = [ 
            "https://i.gifer.com/BAvU.gif", 
            "https://i0.wp.com/nileease.com/wp-content/uploads/2020/10/e6fc5735b11f83a272b7c6cc2ee9ebee.gif",
            "https://data.photofunky.net/output/image/1/2/4/e/124e4b/photofunky.gif" 
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length)); 
        message.channel.send(giflist[gifchoisi]);
    }
}