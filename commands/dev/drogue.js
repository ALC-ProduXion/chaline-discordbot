module.exports = {
    name: 'drogue',
    description: 'Chaline se sent un peu bizarre',
    execute(message) {
        const { client } = require("../../index.js");
        if (fullpower.includes(message.author.id)) {
            client.user.setAvatar('./chalinedrogue.jpg').catch(console.error)
            message.reply("Chaline est drogué pour 12 minutes")
            setTimeout(() => {
                client.user.setAvatar('./chaline.jpg').catch(console.error)
            }, 720000);
        }
    }
}