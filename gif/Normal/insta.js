module.exports = {
    name: "insta",
    description: "instagram",
    execute(message) {
        const giflist = [
            "https://www.azurwebdesign.com/wp-content/uploads/2018/09/Pour-sa-messagerie-Instagram-Direct-Instagram-ajoute-a-son-tour-les-GIF-animas-devenus-incontournables-webmaster-nice.gif"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}