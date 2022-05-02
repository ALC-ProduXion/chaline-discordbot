module.exports = {
    name: "minecraft",
    description: "minecraft",
    execute(message) {
        const giflist = [
            "https://www.gifcen.com/wp-content/uploads/2021/04/minecraft-gif-6.gif", 
            "https://i.pinimg.com/originals/4f/6d/fa/4f6dfa660c926d1d28b80163b358e5f5.gif",
            "https://www.gif-maniac.com/gifs/39/39175.gif",
            "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/13/Enchanted_Diamond_Pickaxe.gif/revision/latest/scale-to-width-down/250?cb=20201118111642"
            ];
        const gifchoisi = Math.floor(Math.random() * (giflist.length));
        message.channel.send(giflist[gifchoisi]);
    }
}