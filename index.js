console.log("-----------------------------------INITIALISATION--------------------------------------------");
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');

const { prefix, gifix, token } = require('./config/config.json');

const client = new Discord.Client(); //CHARGEUR DE COMMANDES
client.commands = new Discord.Collection();
client.cmdgifsn = new Discord.Collection();
client.cmdgifsp = new Discord.Collection();
client.cmdgifsh = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
const cmdgifFilesp = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
const cmdgifFilesh = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));

let rawwhitelist = fs.readFileSync(path.resolve('config/whitelist.json'));
let whitelist = JSON.parse(rawwhitelist);
let rawwblacklist = fs.readFileSync(path.resolve('config/blacklist.json'));
let blacklist = JSON.parse(rawwblacklist);


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

let rawbadCat = fs.readFileSync(path.resolve('config/badcat.json'));
let badCat = JSON.parse(rawbadCat);
let rawgoodCat = fs.readFileSync(path.resolve('config/goodcat.json'));
let goodCat = JSON.parse(rawgoodCat);

let rawstatuslist = fs.readFileSync(path.resolve('config/statuslist.json'));
let statusList = JSON.parse(rawstatuslist);

let rawlistenlist = fs.readFileSync(path.resolve('config/listenlist.json'));
let listenList = JSON.parse(rawlistenlist);

let rawreactchaline = fs.readFileSync(path.resolve('config/reactchaline.json'));
let reactchaline = JSON.parse(rawreactchaline);


//--------------------------------------------------------------------------------------------------------------------------CFG----------------------------------------------------
console.log("Chargement des configs des serveurs : ");
client.cfgsrvs = new Discord.Collection();
const srvcfgFiles = fs.readdirSync('./servers').filter(file => file.endsWith('.json'));
for (const file of srvcfgFiles) {
    const cfgname = file.split(".");
    console.log(cfgname[0]);
    serverconfigtoload = JSON.parse(``+fs.readFileSync(path.resolve(`./servers/${file}`))+``);
    client.cfgsrvs.set(cfgname[0], serverconfigtoload);
}

client.once('ready', () => { //----------------------------------------------------------------------INIT----------------------------------------------------------------------------
    client.channels.cache.get("814214630343835668").send('miaou ? bon faut que je me lève...');
    client.channels.cache.get("814478520914280478").send('**BOT ONLINE** : miaou ? bon faut que je me lève...');
    console.log('---------------------------------------------------------------------------------------------\nInitialisation réussie !')
    setInterval(() => {
        statustype = Math.floor(Math.random() * 4) + 1 ;
        if (statustype === 1) {
            const nbstatus = Math.floor(Math.random() * (statusList.length)); //choisi une activité au hasard
            client.user.setActivity(listenList[nbstatus], { type: 'LISTENING'});
        }
        else if (statustype >= 2) {
            const nbstatus = Math.floor(Math.random() * (statusList.length)); //choisi une activité au hasard
            client.user.setActivity(statusList[nbstatus], { type: 'PLAYING'});
        }
    }, 60000);
});

client.on('message', message => {
    guildcfg = message.guild
    guildid = guildcfg.id;
    if (message.content.startsWith(';config reload') && !message.author.bot && message.member.hasPermission("ADMINISTRATOR")) { //---------------------------------------------RELOAD CFG-------
        try {
            serverconfigtoload = JSON.parse(``+fs.readFileSync(path.resolve(`./servers/${guildid}.json`))+``);
            client.cfgsrvs.set(guildid, serverconfigtoload);
            message.channel.send("La configuration a bien été rechargée");
            console.log("Configuration rechargée");
        } catch {console.log("pas de configuration à recharger");}
    }
    confserv = client.cfgsrvs.get(guildid)
    if (!confserv) {
        configcommand = 'e';
        configreact = '1';
        congifgifn = 'n';
        congifgifp = 'n';
        congifgifh = 'n';
    } else {
        configcommand = confserv.lowcommand;
        configreact = confserv.react;
        congifgifn = confserv.gifn;
        congifgifp = confserv.gifp;
        congifgifh = confserv.gifh;
    }
    //---------------------------------------------------------------------------------------------------------------------TROL------------------------
    if (configreact === '1') {
            if (message.content.startsWith('Chaline') && !message.author.bot) { message.reply('Non mais ça va pas de me réveiller comme ça là !');}
        else if (message.content.startsWith('Vive Chaline') && !message.author.bot) { message.reply('Donne moi des croquettes au lieu de parler');}
        else if (message.content.startsWith('!tgmee6') && !message.author.bot) { message.channel.send('Oue j\'avoue femre bien ta gueule le bot !');}
        else if (message.content.includes('Chaline') && !message.author.bot) { message.channel.send('Coucou ^^');}
        for (var i in badCat) { //-----------------------------------------------------BAD WORDS--------------------------------------------------------------------
            for (var j in reactchaline) {
                if (message.content.toLowerCase().includes(reactchaline[j]) && message.content.toLowerCase().includes(badCat[i]) && !message.author.bot) {
                    message.react("😾");
                    return;
                }
            }
        }
        for (var i in goodCat) { //----------------------------------------------------GOOD WORDS-------------------------------------------------------------------------
            for (var j in reactchaline) {
                if (message.content.toLowerCase().includes(reactchaline[j]) && message.content.toLowerCase().includes(goodCat[i]) && !message.author.bot) {
                    message.react("😺");
                    return;
                }
            }
        }
        if (message.content.startsWith('Coucou Chaline') && message.author.bot) { message.channel.send('Ferme ta gueule le bot !');}
    }
    if (message.content.startsWith(gifix)) { //----------------------------------------------------------------------------------REPARTITEUR GIFS
        const argif = message.content.slice(gifix.length).split(/ +/); //------------------------------------------------------------COMMANDES , GIF
        const cmdgif = argif.shift().toLocaleLowerCase();
        if ( client.cmdgifsn.has(cmdgif) && !blacklist.includes(message.author.id) && ( message.member.roles.cache.some(role => `<@&${role.id}>` === congifgifn) || congifgifn === "e" || whitelist.includes(message.author.id) ) ) { //--------------------------------------------------------NORMAL GIF
            if (cmdgif === "commandlistnormal" && message.member.permissions.has('MANAGE_MESSAGES', 1)) {
                const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
                message.channel.send("Voici la liste des commandes Normales :\n")
                for (const file of cmdgifFilesn) {
                    const cmdgifn = require(`./gif/Normal/${file}`);
                    if (!cmdgifn.description) {message.channel.send(`${cmdgifn.name}`);}
                    else {message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`);}
                }
            }
            try {
                client.cmdgifsn.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply('Meow !\nIl y a un chat dans le paté');
            }
        }
        if (client.cmdgifsp.has(cmdgif) && !blacklist.includes(message.author.id) && ( message.member.roles.cache.some(role => `<@&${role.id}>` === congifgifp) || congifgifp === "e" || whitelist.includes(message.author.id) ) ) { //--------------------------------------------------------PLUS GIF
            if (cmdgif === "commandlistplus" && message.member.permissions.has('MANAGE_MESSAGES', 1)) {
                const cmdgifFilesn = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
                message.channel.send("Voici la liste des commandes Plus :\n")
                for (const file of cmdgifFilesn) {
                    const cmdgifn = require(`./gif/Plus/${file}`);
                    if (!cmdgifn.description) {message.channel.send(`${cmdgifn.name}`);}
                    else {message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`);}
                }
            }
            try {
                client.cmdgifsp.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply('Meow !\nIl y a un chat dans le paté');
            }
        }
        if (client.cmdgifsh.has(cmdgif) && !blacklist.includes(message.author.id) && ( message.member.roles.cache.some(role => `<@&${role.id}>` === congifgifh) || congifgifh === "e" || whitelist.includes(message.author.id) ) ) {//--------------------------------------------------------HARD GIF
            if (cmdgif === "commandlisthard" && message.member.permissions.has('MANAGE_MESSAGES', 1)) {
                const cmdgifFilesn = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));
                message.channel.send("Voici la liste des commandes Hard :\n")
                for (const file of cmdgifFilesn) {
                    const cmdgifn = require(`./gif/Hard/${file}`);
                    if (!cmdgifn.description) {message.channel.send(`${cmdgifn.name}`);}
                    else {message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`);}
                }
            }
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
    if (!message.content.startsWith(prefix) || blacklist.includes(message.author.id) || message.author.bot) return; //---------------------------------------------------DERNIERE CHANCE AVANT PAS ANALYSE
    if (message.member.roles.cache.some(role => `<@&${role.id}>` === configcommand) || configcommand === "e" || message.member.hasPermission("ADMINISTRATOR") || whitelist.includes(message.author.id)) {
            const args = message.content.slice(prefix.length).split(/ +/); //------------------------------------------------------------COMMANDES ; CLASSIQUES
            const command = args.shift().toLocaleLowerCase();

            if (!client.commands.has(command)) return;
            logback = "success"
            try {
                logback = client.commands.get(command).execute(message, args);
                const serverlog = client.guilds.cache.get('814097749603254303');
                let servernametolog = message.guild.id;
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
    }
})
client.login(token);//process.env.TOKEN