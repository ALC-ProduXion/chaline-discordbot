module.exports = {
    name: "toutestlie",
    description: "",
    execute(message) {
        const giflist = [
            "https://cdn.discordapp.com/attachments/662341875616972821/771713081737871370/dF4V9S.gif"
            ];
        const gifchoisi = Math.round(Math.random() * (giflist.length)); //choisi un gif au hasard
        message.channel.send(giflist[gifchoisi]);
    }
}