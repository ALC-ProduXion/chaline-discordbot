const fs = require('fs');

const Discord = require('discord.js')

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

var badCat = ['pute', 'merde','moche', 'nul', 'pas beau', 'j\'aime pas', 'goulag', 'saleté', 'salope', 'pd ', ' pd', 'teubé', 'fdp', 'fils de pute', 'con ', 'tg', 'ta gueule', 'enfoiré', 'enculé'];
var goodCat = ['j\'aime', 'beau', 'intelligent', 'magnifique', 'super', 'bien', 'j\'adore', 'vive']

client.once('ready', () => {
    client.user.setActivity('la baballe (;meow pour m\'appeler)', { type: 'PLAYING'});
    console.log('Ready !')
});

client.on('message', message => {
    if (message.content.startsWith('Chaline')) { message.reply('Non mais ça va pas de me réveiller comme ça là !');}
    else if (message.content.startsWith('Vive Chaline')) { message.reply('Donne moi des croquettes au lieu de parler');}
    else if (message.content.startsWith('!tgmee6')) { message.channel.send('Oue j\'avoue femre bien ta gueule le bot !');}
    else if (message.content.includes('Chaline')) { message.channel.send('Qui m\'a appelé ?');}
    for (var i = 0; i < badCat.length; i++) {
        //console.log(i)
        //console.log(badCat.length)
        if (((message.content.includes('chat')) || (message.content.includes('chats'))  || (message.content.includes('chaline')) || (message.content.includes('Chaline')) ||  (message.content.includes('Chaline'))) && message.content.includes(badCat[i])) {
            message.react("😾");
            //console.log('break')
            return;
        }
    }
    for (var i = 0; i < goodCat.length; i++) {
        //console.log(i)
        //console.log(badCat.length)
        if (((message.content.includes('chat')) || (message.content.includes('chats'))  || (message.content.includes('chaline')) ||  (message.content.includes('Chaline'))) && message.content.includes(goodCat[i])) {
            message.react("😺");
            //console.log('break')
            return;
        }
    }
    //if (message.content.includes('chat') && !message.content.includes(badCat[i])) { message.react("😺");}
    if (message.content.startsWith('Coucou Chaline') && message.author.bot) { message.channel.send('Ferme ta gueule le bot !');}
    else if (!message.content.startsWith(prefix) || message.author.bot) return; // || message.author.bot
    
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLocaleLowerCase();

        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).execute(message, args);
            const channellog = message.guild.channels.cache.find(ch => ch.name === 'chaline-log');
            if (!channellog) {
                message.guild.channels.create('chaline-log');
                return;
            } else {
                channellog.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            }
            console.log(`${message.author.tag} a utilisé ${message.content} sur ${message.guild.name} dans #${message.channel.name} dans la catégrorie ${message.channel.parentID}`);
            client.channels.cache.get("814097974417686528").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
        } catch (error) {
            console.error(error);
            message.reply('Meow !\nIl y a un chat dans le paté');
        }
    })

client.login(process.env.TOKEN);
