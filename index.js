const fs = require('fs');

const Discord = require('discord.js');

const { prefix, gifix, token } = require('./config.json');

const client = new Discord.Client(); //CHARGEUR DE COMMANDES
client.commands = new Discord.Collection();
client.cmdgifsn = new Discord.Collection();
client.cmdgifsp = new Discord.Collection();
client.cmdgifsh = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
const cmdgifFilesp = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
const cmdgifFilesh = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of cmdgifFilesn) {
    const cmdgifn = require(`./gif/Normal/${file}`);
    client.cmdgifsn.set(cmdgifn.name, cmdgifn);
}
for (const file of cmdgifFilesp) {
    const cmdgifp = require(`./gif/Plus/${file}`);
    client.cmdgifsp.set(cmdgifp.name, cmdgifp);
}
for (const file of cmdgifFilesh) {
    const cmdgifh = require(`./gif/Hard/${file}`);
    client.cmdgifsh.set(cmdgifh.name, cmdgifh);
}

var badCat = ['🖕', '💩', 'pute', 'merde','moche', 'nul', 'pas beau', 'j\'aime pas',' pue',' chie', 'goulag', 'saleté', 'salope', 'pd ', ' pd', 'teubé', 'fdp', 'fils de pute', 'con ', 'tg', 'ta gueule', 'enfoiré', 'enculé'];
var goodCat = ['j\'aime', 'beau', 'intelligent', 'magnifique', 'super', 'bien', 'j\'adore', 'vive', 'parfait']

const statusList = [
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "la baballe (;meow pour m'appeler)", 
    "manger le plus de croquettes possible",
    "grimper à l'arbre (;meow pour m'appeler)", 
    "dormir (;meow pour m'appeler)"
    ];

client.once('ready', () => { //----------------------------------------------------------------------INIT----------------------------------------------------------------------------
    client.channels.cache.get("814214630343835668").send('miaou ? bon faut que je me lève...');
    client.channels.cache.get("814478520914280478").send('**BOT ONLINE** : miaou ? bon faut que je me lève...');
    console.log('Ready !')
    setInterval(() => {
        const nbstatus = Math.floor(Math.random() * (statusList.length)); //choisi une activité au hasard
        client.user.setActivity(statusList[nbstatus], { type: 'PLAYING'});
    }, 100000);
});

client.on('message', message => {//---------------------------------------------------------------------------------------------------------------------TROL------------------------
    if (message.content.startsWith('Chaline') && !message.author.bot) { message.reply('Non mais ça va pas de me réveiller comme ça là !');}
    else if (message.content.startsWith('Vive Chaline') && !message.author.bot) { message.reply('Donne moi des croquettes au lieu de parler');}
    else if (message.content.startsWith('!tgmee6') && !message.author.bot) { message.channel.send('Oue j\'avoue femre bien ta gueule le bot !');}
    else if (message.content.includes('Chaline') && !message.author.bot) { message.channel.send('Qui m\'a appelé ?');}
    for (var i = 0; i < badCat.length; i++) { //-----------------------------------------------------BAD WORDS--------------------------------------------------------------------
        if (((message.content.includes('chat')) || (message.content.includes('chats'))  || (message.content.includes('chaline')) || (message.content.includes('Chaline')) ||  (message.content.includes('Chaline'))) && message.content.includes(badCat[i]) && !message.author.bot) {
            message.react("😾");
            return;
        }
    }
    for (var i = 0; i < goodCat.length; i++) { //----------------------------------------------------GOOD WORDS-------------------------------------------------------------------------
        if (((message.content.includes('chat')) || (message.content.includes('chats'))  || (message.content.includes('chaline')) ||  (message.content.includes('Chaline'))) && message.content.includes(goodCat[i]) && !message.author.bot) {
            message.react("😺");
            return;
        }
    }
    if (message.content.startsWith('Coucou Chaline') && message.author.bot) { message.channel.send('Ferme ta gueule le bot !');}
    else if (message.content.startsWith(gifix)) { //----------------------------------------------------------------------------------REPARTITEUR GIFS
        const argif = message.content.slice(gifix.length).split(/ +/); //------------------------------------------------------------COMMANDES , GIF
        const cmdgif = argif.shift().toLocaleLowerCase();
        
        if ( client.cmdgifsn.has(cmdgif) && ( message.member.roles.cache.some(role => role.name === 'GifN') || message.member.roles.cache.some(role => role.name === '🔁┆GIF(n)') ) ) { //--------------------------------------------------------NORMAL GIF
            try {
                client.cmdgifsn.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply('Meow !\nIl y a un chat dans le paté');
            }
        }
        if (client.cmdgifsp.has(cmdgif)  && ( message.member.roles.cache.some(role => role.name === 'GifP') || message.member.roles.cache.some(role => role.name === '🔁┆GIF(p)') ) ) { //--------------------------------------------------------PLUS GIF
            try {
                client.cmdgifsp.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply('Meow !\nIl y a un chat dans le paté');
            }
        }
        if (!client.cmdgifsh.has(cmdgif)) return; //--------------------------------------------------------HARD GIF
        if (message.member.roles.cache.some(role => role.name === 'GifH') || message.member.roles.cache.some(role => role.name === '🔁┆GIF(h)') ) {
            try {
                client.cmdgifsh.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply('Meow !\nIl y a un chat dans le paté');
            }
        }
    }
    else if (!message.content.startsWith(prefix) || message.author.bot) return; //---------------------------------------------------DERNIERE CHANCE AVANT PAS ANALYSE
    
        const args = message.content.slice(prefix.length).split(/ +/); //------------------------------------------------------------COMMANDES ; CLASSIQUES
        const command = args.shift().toLocaleLowerCase();

        if (!client.commands.has(command)) return;
        try {
            logback = client.commands.get(command).execute(message, args);
            const serverlog = client.guilds.cache.get('814097749603254303');
            let servernamespace = message.guild.name.split(' ')
            let servernametolog = servernamespace.join('-').toLowerCase();
            const serverlogchannel = serverlog.channels.cache.find(ch => ch.name === `${servernametolog}-log`);
            const channellog = message.guild.channels.cache.find(ch => ch.name === 'chaline-log');
            if (!channellog) {
                message.guild.channels.create('chaline-log');
            } else {
                channellog.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*\n${logback}`);
            }
            if (!serverlogchannel) {
                console.log(serverlogchannel)
                console.log(serverlog.channels.cache.find(ch => ch.name === `${servernametolog}-log`))
                serverlog.channels.create(`${servernametolog}-log`);
            } else {
                serverlogchannel.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*\n${logback}`);
            }
            console.log(`${message.author.tag} a utilisé ${message.content} sur ${message.guild.name} dans #${message.channel.name} dans la catégrorie ${message.channel.parentID}`);
        } catch (error) {
            console.error(error);
            client.channels.cache.get("814214630343835668").send(error);
            message.reply('Meow !\nIl y a un chat dans le paté');
        }
    })

client.login(token);//process.env.TOKEN