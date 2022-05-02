console.log("DÉMARRAGE DE Chalini")

console.log("-----------------------------------INITIALISATION--------------------------------------------");
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const Canvas = require('canvas');
const { prefix, gifix, token } = require('./config/config.json');

const client = new Discord.Client(); //CHARGEUR DE COMMANDES
require('discord-buttons')(client);
const disbut = require('discord-buttons');
const gif = require('./commands/gif');
client.commands = new Discord.Collection();
client.cmdgifsn = new Discord.Collection();
client.cmdgifsp = new Discord.Collection();
client.cmdgifsh = new Discord.Collection();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function reloadgifs() {
    console.log("Reload des Gifs natifs de en cours...");
    //client.cmdgifsn = undefined //.remove({},function(err, removed){ console.log(err + " rem : " + removed);});
    client.cmdgifsn = new Discord.Collection();
    client.cmdgifsp = new Discord.Collection();
    client.cmdgifsh = new Discord.Collection();
    const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
    const cmdgifFilesp = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
    const cmdgifFilesh = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));

    for (const file of cmdgifFilesn) {
        cmdgifn = require(`./gif/Normal/${file}`);
        client.cmdgifsn.set(cmdgifn.name, cmdgifn);
    }
    console.log(" - Gif Normal");
    for (const file of cmdgifFilesp) {
        cmdgifp = require(`./gif/Plus/${file}`);
        client.cmdgifsp.set(cmdgifp.name, cmdgifp);
    }
    console.log(" - Gif Plus");
    for (const file of cmdgifFilesh) {
        cmdgifh = require(`./gif/Hard/${file}`);
        client.cmdgifsh.set(cmdgifh.name, cmdgifh);
    }
    console.log(" - Gif Hard");
}

function reloadgifserver(idserver) {
    console.log("Reload des Gifs du serveur " + idserver + " de en cours...");
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log("Chargement des gifs natifs de Chaline :");
reloadgifs();

let rawwhitelist = fs.readFileSync(path.resolve('config/whitelist.json'));
let whitelist = JSON.parse(rawwhitelist);
let rawwblacklist = fs.readFileSync(path.resolve('config/blacklist.json'));
let blacklist = JSON.parse(rawwblacklist);
let rawdevlist = fs.readFileSync(path.resolve('config/devlist.json'));
let devlist = JSON.parse(rawdevlist);


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
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

let rawundeletablecommand = fs.readFileSync(path.resolve('config/supercmd.json'));
let undeletablecommand = JSON.parse(rawundeletablecommand);

//--------------------------------------------------------------------------------------------------------------------------CFG----------------------------------------------------
console.log("------------------------------------------------");
console.log("Chargement des configs des serveurs : ");
client.cfgsrvs = new Discord.Collection();
const srvcfgFiles = fs.readdirSync('./servers').filter(file => file.endsWith('.json'));
for (const file of srvcfgFiles) {
    const cfgname = file.split(".");
    console.log(cfgname[0]);
    serverconfigtoload = JSON.parse(`` + fs.readFileSync(path.resolve(`./servers/${file}`)) + ``);
    client.cfgsrvs.set(cfgname[0], serverconfigtoload);
}
console.log("------------------------------------------------");
console.log("Chargement des gifs personnalisés des serveurs :");
client.once('ready', () => { //----------------------------------------------------------------------INIT----------------------------------------------------------------------------
    pxclear = client.emojis.cache.get("837418338120368188")
    client.channels.cache.get("814214630343835668").send('Chaline Test');
    client.channels.cache.get("814478520914280478").send('**BOT ONLINE** : Independance Update soon !'); //Test et ajout de nouvelles fonctionnalités
    console.log('---------------------------------------------------------------------------------------------\nInitialisation réussie !')
    setInterval(() => {
        statustype = Math.floor(Math.random() * 4) + 1;
        if (statustype === 1) {
            const nbstatus = Math.floor(Math.random() * (statusList.length)); //choisi une activité au hasard
            client.user.setActivity(listenList[nbstatus], { type: 'LISTENING' });
        }
        else if (statustype >= 2) {
            const nbstatus = Math.floor(Math.random() * (statusList.length)); //choisi une activité au hasard
            client.user.setActivity(statusList[nbstatus], { type: 'PLAYING' });
        }
    }, 60000);
});

client.on('message', message => {
    if (!message.channel.guild) {
        if (message.author.bot) return
        if (message.content.toLowerCase().startsWith(";suggest")) {
            client.channels.cache.get("861296498276040734").send(`${message.author.tag}(id:${message.author.id}) a suggéré depuis les mp du bot :\n\n ${message.content.slice(8)}`);
            console.log(message.author.tag + " a fait une suggestion !");
            message.reply(`Suggestion transmise !`);
        }
        if (message.content.toLowerCase().startsWith(";error")) {
            client.channels.cache.get("862272460430245888").send(`${message.author.tag}(id:${message.author.id}) a report une erreur depuis les mp du bot :\n\n ${message.content.slice(6)}`);
            console.log(message.author.tag + " a report une erreur !");
            message.reply(`Rapport d'erreur transmis !`);
        }
        if (message.content.startsWith(gifix)) { //----------------------------------------------------------------------------------REPARTITEUR GIFS
            const argif = message.content.slice(gifix.length).split(/ +/); //------------------------------------------------------------COMMANDES , GIF
            const cmdgif = argif.shift().toLocaleLowerCase();
            if (client.cmdgifsn.has(cmdgif) && !blacklist.includes(message.author.id)) { //--------------------------------------------------------NORMAL GIF
                if (cmdgif === "commandlistnormal") {
                    const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
                    message.channel.send("Voici la liste des commandes Normales :\n")
                    for (const file of cmdgifFilesn) {
                        const cmdgifn = require(`./gif/Normal/${file}`);
                        if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                        else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                    }
                }
                try {
                    client.cmdgifsn.get(cmdgif).execute(message, argif);
                    client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\``);
                } catch (error) {
                    console.error(error);
                    client.channels.cache.get("814214630343835668").send(error);
                    message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
                }
            }
            if (client.cmdgifsp.has(cmdgif)) { //--------------------------------------------------------PLUS GIF
                if (cmdgif === "commandlistplus") {
                    const cmdgifFilesn = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
                    message.channel.send("Voici la liste des commandes Plus :\n")
                    for (const file of cmdgifFilesn) {
                        const cmdgifn = require(`./gif/Plus/${file}`);
                        if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                        else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                    }
                }
                try {
                    client.cmdgifsp.get(cmdgif).execute(message, argif);
                    client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\``);
                } catch (error) {
                    console.error(error);
                    client.channels.cache.get("814214630343835668").send(error);
                    message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
                }
            }
            if (client.cmdgifsh.has(cmdgif)) {//--------------------------------------------------------HARD GIF
                if (cmdgif === "commandlisthard") {
                    const cmdgifFilesn = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));
                    message.channel.send("Voici la liste des commandes Hard :\n")
                    for (const file of cmdgifFilesn) {
                        const cmdgifn = require(`./gif/Hard/${file}`);
                        if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                        else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                    }
                }
                try {
                    client.cmdgifsh.get(cmdgif).execute(message, argif);
                    client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\``);
                } catch (error) {
                    console.error(error);
                    client.channels.cache.get("814214630343835668").send(error);
                    message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
                }
            }
        }
        console.log(message.author.tag + " (" + message.author.id + ") a envoyé en mp : " + message.content)
        client.channels.cache.get("841940895502958642").send(message.author.tag + " a envoyé en mp : " + message.content);
        return
    }
    const guildcfg = message.guild
    const guildid = guildcfg.id;
    //-------------------------------------------------SPECIAL COMMANDS---------------------------------------------------------
    if (message.content.startsWith(';config reload') && !message.author.bot && message.member.hasPermission("ADMINISTRATOR")) { //---------------------------------------------RELOAD CFG-------
        try {
            serverconfigtoload = JSON.parse(`` + fs.readFileSync(path.resolve(`./servers/${guildid}.json`)) + ``);
            client.cfgsrvs.set(guildid, serverconfigtoload);
            message.channel.send("La configuration a bien été rechargée");
            console.log("Configuration rechargée");
        } catch { console.log("pas de configuration à recharger"); }
    }
    if (message.content.startsWith(';welcome reload') && !message.author.bot && message.member.hasPermission("ADMINISTRATOR")) { //---------------------------------------------RELOAD CFG-------
        try {
            serverconfigtoload = JSON.parse(`` + fs.readFileSync(path.resolve(`./servers/${guildid}welcome.json`)) + ``);
            client.cfgsrvs.set(guildid + "welcome", serverconfigtoload);
            message.channel.send("La configuration de bienvenue a bien été rechargée");
            console.log("Configuration de bienvenue rechargée");
        } catch { console.log("pas de configuration bienvenue à recharger"); }
    }
    confserv = client.cfgsrvs.get(guildid) //------------------------------------------------------------------ CHECK Config
    if (!confserv) {
        configcommand = 'e';
        configreact = '1';
        configgifn = 'n';
        configgifp = 'n';
        configgifh = 'n';
        congifgifs = 'n';
        configlog = "d";
    } else {
        configcommand = confserv.lowcommand;
        configreact = confserv.react;
        configgifn = confserv.gifn;
        configgifp = confserv.gifp;
        configgifh = confserv.gifh;
        configgifs = confserv.gifs;
        configlog = confserv.log;
    }
    if (message.content.startsWith(';send') && !message.author.bot && message.author.id === "444579657279602699") { //-------------------------------- SEND
        try {
            const argsend = message.content.slice(6).split(/ +/);
            let channeltosend = argsend[0];
            let msgtosend = argsend.slice(1).join(' ');
            client.channels.cache.get(channeltosend).send(msgtosend);
        } catch (error) {
            client.channels.cache.get("814214630343835668").send(error);
            message.reply('Ton ID de salon me paraît pas bon...');
        }
    }
    if (message.content.startsWith(';msgbtn') && !message.author.bot && message.author.id === "444579657279602699") { //-------------------------------- SEND MSG BTN
        try {
            argsend = message.content.slice(8).split(/ +/);
            channeltosend = argsend[0];
            if (!channeltosend || channeltosend == "?" || channeltosend == "help" || !argsend[2]) {
                return message.reply(`;msgbtn channelsend message+to+send content+in|color(red/gray...url)|url/n content+in|color(red/gray...url)|url/n content+in|color(red/gray...url)|url/idfunction`)
            }
            msgtosend = argsend[1].split("+").join(" ");
            //console.log(argsend + " - " + msgtosend);
            argsend.shift();
            argsend.shift();
            rowmsgbuttonlist = "";
            for (let but = 0; but < argsend.length; but++) {
                console.log(but + " : " + argsend[but]);
                //linkbutton = false;
                buttoninfo = argsend[but].split(/\|+/);

                console.log(buttoninfo);
                txtbutton = buttoninfo[0].split("+").join(" ");
                colorbutton = buttoninfo[1];
                linkbutton = buttoninfo[2];
                console.log(but + " : ()" + txtbutton + "() -c: ()" + colorbutton + "() link: ()" + linkbutton + "()");
                if (colorbutton == "url") {
                    eval(`msgbutton${but} = new disbut.MessageButton()
                    .setStyle("${colorbutton}")
                    .setLabel("${txtbutton}")
                    .setURL("${linkbutton}")`);
                    console.log("url ajoutée");
                } else {
                    eval(`msgbutton${but} = new disbut.MessageButton()
                .setStyle("${colorbutton}")
                .setLabel("${txtbutton}")
                .setID('${linkbutton}')`);
                }
                /*if (linkbutton != "n") {
                    eval(`.setURL("${linkbutton}")`);
                    console.log("url ajoutée");
                }*/
                rowmsgbuttonlist += "msgbutton" + but;
                if (but + 1 < argsend.length) rowmsgbuttonlist += ",";
            }
            console.log(rowmsgbuttonlist);
            eval(`rowbutton = new disbut.MessageActionRow()
            .addComponents([${rowmsgbuttonlist}])`)
            /*rowbutton = new disbut.MessageActionRow()
                .addComponents([button1, button2])*/
            client.channels.cache.get(channeltosend).send(msgtosend, { components: [rowbutton] }); //  {components: [rowbutton]}
        } catch (error) {
            client.channels.cache.get("814214630343835668").send(error);
            message.reply('Ton ID de salon me paraît pas bon... ou alors tu t\'es chié lol');
        }
    }
    if (message.content.startsWith(';msgmenu') && !message.author.bot && message.author.id === "444579657279602699") { //-------------------------------- SEND MSG MENU
        try {
            argsend = message.content.slice(9).split(/ +/);
            channeltosend = argsend[0];
            if (!channeltosend || channeltosend == "?" || channeltosend == "help" || !argsend[3]) {
                return message.reply(`;msgmenu channelsend message+to+send menu+Placeholder|customid txtoption1|emoji|option1description|value menuPlaceholder|customid txtoption2|emoji|option2description|value`)
            }
            msgtosend = argsend[1].split("+").join(" ");
            argsend.shift();
            argsend.shift();
            menusettings = argsend[0].split(/\|+/);
            menuplaceholder = menusettings[0].split("+").join(" ");;
            customidmenu = menusettings[1];
            argsend.shift();
            menuoptionslist = "";
            for (let optmenu = 0; optmenu < argsend.length; optmenu++) {
                menuoption = argsend[optmenu].split(/\|+/);
                txtoption = menuoption[0].split("+").join(" ");;
                emojoption = menuoption[1];
                descoption = menuoption[2].split("+").join(" ");;
                valoption = menuoption[3];
                console.log(optmenu + " : " + txtoption + " e: " + emojoption + " desc: " + descoption + " v: " + valoption);
                eval(`moption${optmenu} = new disbut.MessageMenuOption()
                    .setLabel("${txtoption}")
                    .setEmoji("${emojoption}")
                    .setValue("${valoption}")
                    .setDescription("${descoption}")`);
                menuoptionslist += `.addOption(moption${optmenu})`
                /*console.log(`moption${optmenu} = new disbut.MessageMenuOption().setLabel("${txtoption}").setEmoji("${emojoption}").setValue("${valoption}").setDescription("${descoption}")`);*/
            }
            /*console.log(`menusend = new disbut.MessageMenu().setID("${customidmenu}").setPlaceholder("${menuplaceholder}").setMaxValues(1).setMinValues(1)${menuoptionslist}`);
            console.log(menuoptionslist);*/
            eval(`menusend = new disbut.MessageMenu()
                .setID("${customidmenu}")
                .setPlaceholder("${menuplaceholder}")
                .setMaxValues(${argsend.length})//
                .setMinValues(1)
                ${menuoptionslist}`);
            client.channels.cache.get(channeltosend).send(msgtosend, menusend); //  {components: [rowbutton]}
        } catch (error) {
            client.channels.cache.get("814214630343835668").send(error);
            message.reply('Ton ID de salon me paraît pas bon...');
        }
    }
    if (message.content.startsWith(';mp') && !message.author.bot && message.author.id === "444579657279602699") { //-------------------------------- MP
        try {
            const argsend = message.content.slice(6).split(/ +/);
            let msgtosend = argsend.slice(1).join(' ');
            const usertomp = message.mentions.users.first();
            const membertomp = message.guild.members.resolve(usertomp);
            membertomp.send(msgtosend)
        } catch (error) {
            client.channels.cache.get("814214630343835668").send(error);
            message.reply('Je ne peux envoyer de message à cette personne');
        }
    }
    if (message.content.startsWith(';react') && !message.author.bot && message.author.id === "444579657279602699") { //--------------------------- REACT
        try {
            const argsend = message.content.slice(6).split(/ +/);
            let channeltosend = argsend[1];
            let msgtoreact = argsend[2];
            let reactemote = argsend[3];
            client.channels.cache.get(channeltosend).messages.fetch(msgtoreact).then(m => { m.react(reactemote); });
        } catch (error) {
            client.channels.cache.get("814214630343835668").send(error);
            message.reply('Ton ID de message ou ton emote ne me paraît pas bon...');
        }
    }
    try {
        if (message.content.startsWith(";gif")) { //------------------------------------------------------------------------------------------ GIF HELP & INFOS
            let joinsrvbtn = new disbut.MessageButton()
                .setLabel('👉️ Rejoindre le serveur')
                .setURL('https://discord.gg/jfUqQcP88K')
                .setStyle('url');
            if (devlist.includes(message.author.id)) {
                message.reply(`Vous êtes contributeur de gif, vous avez donc accès à tous les gifs de toutes les catégories sur tous les serveurs où Chaline se trouve. Les commandes de gif commencent par ",".\nEn tant que contributeur vous avez accès aux commandes suivantes :
            > \`;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif\` pour ajouter des gifs,
            > \`;remgif gifname reason\` pour supprimer des gifs,
            > \`;relgif\` pour reload les gifs du bot manuellement (dépannage),
            > \`;suggest message\` pour suggérer du contenu/fonctionnalités aux développeurs du bot`)
            } else {
                message.channel.send(`Ce bot est doté d'un système de commandes de gif, vous permettant de mieux exprimer vos émotions.\nPour utiliser les commandes gifs, l'administrateur de vore serveur doit vous avoir activé l'accès (;config help)\nSi c'est le cas, il vous suffit de taper "," suivi d'un nom de commande.\nIl en existe beaucoup, mais s'il en manque vous pouvez en profiter pour \`;suggest idée de gif, avec exemples\``);
                message.channel.send(`Par exemple vous pouvez dire \`,bonjour\`.\nUne liste est régulièrement mise à jour sur \`https://discord.gg/jfUqQcP88K\` dans les salons cmd-gif-\\* (ATTENTION : Ce serveur est en lecture seule et est un serveur de logs, nous vous conseillons de le mettre en **muet**)`, joinsrvbtn)
            }
            if (message.member.hasPermission("ADMINISTRATOR")) {
                gifindic = `Comme vous êtes admin du serveur, pour régler qui a accès aux commandes de gif il vous suffit d'utiliser la commande \`;config help\`.
Pour pouvoir utiliser les commandes de gif, il faudra créer sur votre serveur 4 rôles si vous souhaitez autoriser uniquement certaines personnes à utiliser certains types de gif.
Ceci est un exemple : 
- GifN : pour avoir les gifs normaux *(Normal)*
- GifP : pour avoir un contenu plus vaste mais moins family-friendly *(Plus)*
- GifH : pour avoir des gif un peu trash et un peu plus violents (Ne soyez pas méchants avec, c'est juste pour s'amuser ^^) *(Hard)*
- GifS : pour avoir des gif spécifiques à votre serveur ajoutés par les admins du serveur (voir \`;myconfig\`) *(Server)*`
                if (!confserv) {
                    gifindic += `\n\nActuellement, personne ne peut effectuer de commande de gif sur ce serveur`
                }
                else if (configgifn == "e" && configgifp == "e" && configgifh == "e" && configgifs == "e") {
                    gifindic += `\n\nActuellement, tout le monde a accès à toutes les commandes de gif sur ce serveur`
                } else {
                    gifindic += "\n\nActuellement, "
                    if (configgifn == "e") { gifindic += "tout le monde a" } else if (configgifn == "n") { gifindic += "personne n'a" } else { rolegifn = message.guild.roles.cache.get(configgifn.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifn.name}\`` }
                    gifindic += " accès aux commandes de gif normales de Chaline,\n"
                    if (configgifp == "e") { gifindic += "tout le monde a" } else if (configgifp == "n") { gifindic += "personne n'a" } else { rolegifp = message.guild.roles.cache.get(configgifp.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifp.name}\`` }
                    gifindic += " accès aux commandes de gif plus de Chaline,\n"
                    if (configgifh == "e") { gifindic += "tout le monde a" } else if (configgifh == "n") { gifindic += "personne n'a" } else { rolegifh = message.guild.roles.cache.get(configgifh.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifh.name}\`` }
                    gifindic += " accès aux commandes de gif hard de Chaline,\n"
                    if (configgifs == "e") { gifindic += "tout le monde a" } else if (configgifs == "n") { gifindic += "personne n'a" } else { rolegifs = message.guild.roles.cache.get(configgifs.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifs.name}\`` }
                    gifindic += " accès aux commandes de gif personnalisés du serveur."
                }
                message.reply(gifindic)
            }
        }
        if (message.content.startsWith(";suggest")) { //------------------------------------------------------------------------------------------ SUGGEST
            client.channels.cache.get("861296498276040734").send(`${message.author.tag}(id:${message.author.id}) a suggéré depuis le serveur ${message.guild.name} (channel : ${message.channel.id}) :\n\n ${message.content.slice(8)}`);
            console.log(message.author.tag + " a fait une suggestion !");
            message.reply(`Suggestion transmise !`);
        }
        if (message.content.startsWith(";error")) { //------------------------------------------------------------------------------------------ ERROR
            client.channels.cache.get("862272460430245888").send(`${message.author.tag}(id:${message.author.id}) a report une erreur depuis le serveur ${message.guild.name} (channel : ${message.channel.id}) :\n\n ${message.content.slice(6)}`);
            console.log(message.author.tag + " a report une erreur !");
            message.reply(`Rapport d'erreur transmis !`);
        }
        else if (message.content.startsWith(";relgif") && devlist.includes(message.author.id)) { //-------------------------------- RELOAD GIF
            reloadgifs();
            console.log(`${message.author.tag} a reload manuellement les gifs`);
            client.channels.cache.get("861268662291922954").send(`${message.author.tag} a reload manuellement les gifs`);
            message.reply(`Gif rechargés !`);
        }
        else if (message.content.startsWith(";addgif") && devlist.includes(message.author.id)) {//--------------------------------- ADD GIF only devlist
            try {
                argsend = message.content.slice(8).split(/ +/);
                commandname = argsend[0].toLowerCase();
                console.log(argsend);
                if (commandname == "help" || commandname == "?") {
                    return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > ;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif
                gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                }
                if (!argsend[3]) {
                    return message.reply(`Erreur : Vérifiez le nombre d'arguments !
                Pour rappel le commande s'écrit sous la forme :
                > ;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif
                gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                }
                commanddesc = argsend[1].split("+").join(" ");
                commandcatg = argsend[2];
                if (commandcatg == "n") {
                    commandfold = "Normal";
                } else if (commandcatg == "p") {
                    commandfold = "Plus";
                } else if (commandcatg == "h") {
                    commandfold = "Hard";
                } else {
                    return message.reply(`Erreur : la catégorie doit être n(pour Normal), p(pour Plus) ou h(pour Hard)`);
                }
                existngiffile = false;
                existpgiffile = false;
                existhgiffile = false;
                try {//---------------------------loading gif file normal
                    existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                    console.log("Ce fichier Normal exite déjà");
                } catch (err) { console.log("Ce fichier Normal n'existe pas"); }
                try {//---------------------------loading gif file plus
                    existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                    console.log("Ce fichier Plus exite déjà");
                } catch (err) { console.log("Ce fichier Plus n'existe pas"); }
                try {//---------------------------loading gif file hard
                    existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                    console.log("Ce fichier Hard exite déjà");
                } catch (err) { console.log("Ce fichier Hard n'existe pas"); }
                setTimeout(function () {
                    if (existngiffile != false || existpgiffile != false || existhgiffile != false) {
                        return message.reply(`La commande ,${commandname} existe déjà !`);
                    }
                    console.log("commmande n'existe pas");
                    var actualdate = new Date();
                    console.log(actualdate)
                    datevar = actualdate.toISOString();
                    giflisturl = argsend
                    giflisturl.shift() //delete name from list
                    giflisturl.shift() //delete desc from list
                    giflisturl.shift() //delete catg from list
                    giflisturljson = JSON.stringify(giflisturl)
                    console.log(giflisturljson);
                    fs.appendFile(`./gif/${commandfold}/${commandname}.js`, `module.exports = { //Commande générée par ${message.author.tag}(${message.author.id}) (avec AddGif v1.0)
    name: "${commandname}",
    description: "${commanddesc}",
    execute(message) {
    const giflist = ${giflisturljson}
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le ${datevar} depuis le channel ${message.channel.name}(${message.channel.id}) sur le serveur ${message.guild.name}(${message.guild.id})`, function (err) {
                        if (err) throw err;
                        console.log('File is created successfully.');
                    });
                    setTimeout(function () {
                        servergifchannel = client.guilds.cache.get('814097749603254303')
                        if (commandcatg == "n") {
                            ngifchannel = servergifchannel.channels.cache.find(ch => ch.name === 'cmd-gif-normal');
                            ngifchannel.send(`${commandname} : *${commanddesc}*`);
                        } else if (commandcatg == "p") {
                            pgifchannel = servergifchannel.channels.cache.find(ch => ch.name === 'cmd-gif-plus')
                            pgifchannel.send(`${commandname} : *${commanddesc}*`);
                        } else if (commandcatg == "h") {
                            hgifchannel = servergifchannel.channels.cache.find(ch => ch.name === 'cmd-gif-hard')
                            hgifchannel.send(`${commandname} : *${commanddesc}*`);
                        }
                        reloadgifs();
                        console.log(`Nouvelle commande générée dans ./gif/${commandfold}/${commandname}.js`);
                        client.channels.cache.get("861268662291922954").send(`Nouvelle commande générée dans ./gif/${commandfold}/${commandname}.js par ${message.author.tag}, gifs :
                ${giflisturl}`);
                        message.reply(`Nouvelle commande ,${commandname} ajoutée !`);
                    }, 1000);
                }, 1000);
            } catch (error) {
                client.channels.cache.get("814214630343835668").send(error);
                message.reply(`Une erreur est survenue !
            Pour rappel le commande s'écrit sous la forme :
            > ;addgif gifname description+avec+des+plus+pour+les+espace category(n/p/h) example1.gif example2.gif
            gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
            }
        }
        else if (message.content.startsWith(";remgif") && devlist.includes(message.author.id)) {//--------------------------------- REM GIF only devlist
            try {
                argsend = message.content.slice(8).split(/ +/);
                remreason = message.content.slice(8)
                commandname = argsend[0].toLowerCase();
                if (commandname == "help" || commandname == "?" || !argsend[0]) {
                    return message.reply(`Permet de supprimer une commande.
                    > ;remgif nomdelacommande raison`);
                }
                if (undeletablecommand.includes(commandname)) {
                    client.channels.cache.get("861268662291922954").send(`${message.author.tag} a tenté de supprimer ,${remreason}`);
                    return message.reply(`Wow ! Cette commande possède trop de pouvoir je ne peut la supprimer ! :/`);
                }
                existngiffile = false;
                existpgiffile = false;
                existhgiffile = false;
                try {//---------------------------loading gif file normal
                    existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                    console.log("Ce fichier Normal exite");
                } catch (err) { console.log("Ce fichier Normal n'existe pas"); }
                try {//---------------------------loading gif file plus
                    existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                    console.log("Ce fichier Plus exite");
                } catch (err) { console.log("Ce fichier Plus n'existe pas"); }
                try {//---------------------------loading gif file hard
                    existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                    console.log("Ce fichier Hard exite");
                } catch (err) { console.log("Ce fichier Hard n'existe pas"); }
                if (existngiffile != false) {
                    dirnumber = getRandomInt(0, 99999999)
                    dirdate = new Date().toISOString().substring(0, 10).split("-").join("")
                    destinationdir = dirdate + '-' + dirnumber + 'by' + message.author.id
                    try {
                        fs.rename(`./gif/Normal/${commandname}.js`, `./gif/deleted/${commandname}-Ndeleted${destinationdir}.js`, function (err) {
                            if (err) throw err
                            console.log(`${commandname} a été supprimée par ${message.author.tag}`)
                        })
                        setTimeout(function () {
                            reloadgifs();
                            client.channels.cache.get("861268662291922954").send(`${message.author.tag} a supprimé ,${remreason}`);
                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                        }, 1000);
                    } catch (err) { return console.error(err); }
                }
                else if (existpgiffile != false) {
                    dirnumber = getRandomInt(0, 99999999)
                    dirdate = new Date().toISOString().substring(0, 10).split("-").join("")
                    destinationdir = dirdate + '-' + dirnumber + 'by' + message.author.id
                    try {
                        fs.rename(`./gif/Plus/${commandname}.js`, `./gif/deleted/${commandname}-Pdeleted${destinationdir}.js`, function (err) {
                            if (err) throw err
                            console.log(`${commandname} a été supprimée par ${message.author.tag}`)
                        })
                        setTimeout(function () {
                            reloadgifs();
                            client.channels.cache.get("861268662291922954").send(`${message.author.tag} a supprimé ,${remreason}`);
                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                        }, 1000);
                    } catch (err) { return console.error(err); }
                }
                else if (existhgiffile != false) {
                    dirnumber = getRandomInt(0, 99999999)
                    dirdate = new Date().toISOString().substring(0, 10).split("-").join("")
                    destinationdir = dirdate + '-' + dirnumber + 'by' + message.author.id
                    try {
                        fs.rename(`./gif/Hard/${commandname}.js`, `./gif/deleted/${commandname}-Hdeleted${destinationdir}.js`, function (err) {
                            if (err) throw err
                            console.log(`${commandname} a été supprimée par ${message.author.tag}`)
                        })
                        setTimeout(function () {
                            reloadgifs();
                            client.channels.cache.get("861268662291922954").send(`${message.author.tag} a supprimé ,${remreason}`);
                            message.reply(`La commande ,${commandname} bien été supprimée !`);
                        }, 1000);
                    } catch (err) { return console.error(err); }
                }
                else {
                    return message.reply(`Il n'y a pas de commande nommée ,${commandname} :/`)
                }
            } catch (error) { console.error(error); }
        }
        if (message.content.startsWith(";mygif")) { //===================================================================================================== MY GIF
            servgifdir = `./gif/servers/${message.guild.id}`;
            actualdate = new Date();
            validiteconfiggifs = configgifs;
            try {
                // first check if directory already exists
                if (!fs.existsSync(servgifdir)) {
                    fs.mkdirSync(servgifdir);
                    console.log(`./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                    client.channels.cache.get("862021850851049492").send(`**NEW :** ./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                    elgibilitysrv = {
                        elgibility: 1,
                        datedelivering: actualdate
                    }
                    const jsonStringcfg = JSON.stringify(elgibilitysrv);
                    fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                        if (err) {
                            console.log(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                            client.channels.cache.get("862021850851049492").send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                            message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur \`;error l'erreur\`")
                        } else {
                            console.log(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                            client.channels.cache.get("862021850851049492").send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                            try {//---------------------------loading previous
                                eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                console.log("Eligibilité chargée")
                            } catch (err) { console.log("! ERREUR : pas d'Eligibilité chargée"); }
                            setTimeout(function () {
                                if (devlist.includes(message.author.id)) {
                                    message.reply(`Vous êtes contributeur de gif, vous avez donc accès à tous les gifs de toutes les catégories sur tous les serveurs où Chaline se trouve. Les commandes de gif commencent par ",".\nEn tant que contributeur vous avez accès aux commandes personnalisées de tous les serveurs :
                                > \`;g idserver gifname\` pour utiliser le gifname personnalisé du serveur choisi.`)
                                } else {
                                    message.channel.send(`Ce bot est doté d'un système de commandes de gif personnalisés par serveur, vous permettant de mieux exprimer vos émotions.\nPour utiliser les commandes gifs, l(es) administrateur(s) de vore serveur doit vous avoir activé l'accès (;config help) et doit avoir créé des commandes personnalisées\nSi c'est le cas, il vous suffit de taper "," suivi d'un nom de commande.`);
                                    message.channel.send(`Par exemple vous pouvez dire \`,bonjour\`. (même principe que les ;gif de Chaline)`)
                                }
                                if (message.member.hasPermission("ADMINISTRATOR")) {
                                    gifindic = `Comme vous êtes admin du serveur, pour régler qui a accès aux commandes de gif il vous suffit d'utiliser la commande \`;config help\`.
Vous pouvez configurer un rôle qui sera nécessaire pour utiliser ces gifs personnalisés.
                    
Pour ajouter des des gifs personnallisés, il vout suffit d'effectuer la commande \`;newgif lenomdugif liendugif1.gif liendudeuxièmegif.gif ...\`
Si vous souhaitez supprimer un gif personnalisé, effectuez la commande \`;delgif lenomdugif\` (Attention la suppression est définitive les données seront perdues)`
                                    if (!eligibilityread) {
                                        gifindic += "Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`"
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            if (!confserv) {
                                                gifindic += `\n\nActuellement, personne ne peut utiliser les commandes de gif de ce serveur`
                                            } else {
                                                gifindic += "\n\nActuellement, "
                                                if (validiteconfiggifs == "e") { gifindic += "tout le monde a" } else if (validiteconfiggifs == "n") { gifindic += "personne n'a"; } else { rolegifs = message.guild.roles.cache.get(validiteconfiggifs.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifs.name}\`` }
                                                gifindic += " accès aux commandes de gif personnalisés du serveur."
                                            }
                                        } else { gifindic += `\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\`` }
                                    }
                                    message.reply(gifindic)
                                }
                            }, 500);
                        }
                    })
                } else {
                    console.log("(folder already exists) ;mygif use on " + message.guild.name);
                    fs.stat(`${servgifdir}/settings${message.guild.id}.json`, function (err, stat) {
                        if (err == null) {
                            try {//---------------------------loading previous
                                eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                console.log("Eligibilité chargée")
                            } catch (err) { console.log("! ERREUR : pas d'Eligibilité chargée"); }
                            setTimeout(function () {
                                if (devlist.includes(message.author.id)) {
                                    message.reply(`Vous êtes contributeur de gif, vous avez donc accès à tous les gifs de toutes les catégories sur tous les serveurs où Chaline se trouve. Les commandes de gif commencent par ",".\nEn tant que contributeur vous avez accès aux commandes personnalisées de tous les serveurs :
                                > \`;g idserver gifname\` pour utiliser le gifname personnalisé du serveur choisi.`)
                                } else {
                                    message.channel.send(`Ce bot est doté d'un système de commandes de gif personnalisés par serveur, vous permettant de mieux exprimer vos émotions.\nPour utiliser les commandes gifs, l(es) administrateur(s) de vore serveur doit vous avoir activé l'accès (;config help) et doit avoir créé des commandes personnalisées\nSi c'est le cas, il vous suffit de taper "," suivi d'un nom de commande.`);
                                    message.channel.send(`Par exemple vous pouvez dire \`,bonjour\`. (même principe que les ;gif de Chaline)`)
                                }
                                if (message.member.hasPermission("ADMINISTRATOR")) {
                                    gifindic = `Comme vous êtes admin du serveur, pour régler qui a accès aux commandes de gif il vous suffit d'utiliser la commande \`;config help\`.
Vous pouvez configurer un rôle qui sera nécessaire pour utiliser ces gifs personnalisés.
                    
Pour ajouter des des gifs personnallisés, il vout suffit d'effectuer la commande \`;newgif lenomdugif liendugif1.gif liendudeuxièmegif.gif ...\`
Si vous souhaitez supprimer un gif personnalisé, effectuez la commande \`;delgif lenomdugif\` (Attention la suppression est définitive les données seront perdues)`
                                    if (!eligibilityread) {
                                        gifindic += "Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`"
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            if (!confserv) {
                                                gifindic += `\n\nActuellement, personne ne peut utiliser les commandes de gif de ce serveur`
                                            } else {
                                                gifindic += "\n\nActuellement, "
                                                if (configgifs == "e") { gifindic += "tout le monde a" } else if (configgifs == "n") { gifindic += "personne n'a" } else { rolegifs = message.guild.roles.cache.get(configgifs.replace('<@&', '').replace('>', '')); gifindic += ` seul les membres ayant le rôle \`@${rolegifs.name}\`` }
                                                gifindic += " accès aux commandes de gif personnalisés du serveur."
                                            }
                                        } else { gifindic += `\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\`` }
                                    }
                                    message.reply(gifindic)
                                }
                            }, 500);
                        } else if (err.code === 'ENOENT') {
                            elgibilitysrv = {
                                elgibility: 1,
                                datedelivering: actualdate
                            }
                            const jsonStringcfg = JSON.stringify(elgibilitysrv);
                            fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                                    client.channels.cache.get("862021850851049492").send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                                    message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur \`;error l'erreur\`")
                                } else {
                                    console.log(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                    client.channels.cache.get("862021850851049492").send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                    message.reply("Mise à jour de l'égibilité du serveur en cours, veuillez réessayer, si le problème persiste signalez l'erreur \`;error l'erreur\`")
                                }
                            })
                        } else {
                            console.log('Some other error: ', err.code);
                        }
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
        if (message.content.startsWith(";newgif") && message.member.hasPermission("ADMINISTRATOR")) {//--------------------------------- NEW GIF : gif perso
            try {
                actualdate = new Date();
                servgifdir = `./gif/servers/${message.guild.id}`;
                try {
                    // first check if directory already exists
                    if (!fs.existsSync(servgifdir)) {
                        fs.mkdirSync(servgifdir);
                        console.log(`./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                        client.channels.cache.get("862021850851049492").send(`**NEW :** ./gif/servers/${message.guild.id} a été créé pour le serveur ${message.guild.name}`);
                        elgibilitysrv = {
                            elgibility: 1,
                            datedelivering: actualdate
                        }
                        const jsonStringcfg = JSON.stringify(elgibilitysrv);
                        fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                            if (err) {
                                console.log(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                                client.channels.cache.get("862021850851049492").send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                                message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur \`;error l'erreur\`")
                            } else {
                                console.log(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                client.channels.cache.get("862021850851049492").send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                try {//---------------------------loading previous
                                    eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                    console.log("Eligibilité chargée")
                                } catch (err) { console.log("! ERREUR : pas d'Eligibilité chargée"); }
                                setTimeout(function () {
                                    if (!eligibilityread) {
                                        message.reply("Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`")
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            argsend = message.content.slice(8).split(/ +/);
                                            commandname = argsend[0].toLowerCase();
                                            console.log(argsend);
                                            if (commandname == "help" || commandname == "?") {
                                                return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            if (!argsend[1]) {
                                                return message.reply(`Erreur : Vérifiez le nombre d'arguments !
Pour rappel le commande s'écrit sous la forme :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            existngiffile = false;
                                            existpgiffile = false;
                                            existhgiffile = false;
                                            try {//---------------------------loading gif file normal
                                                existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                                                console.log("Ce fichier Normal exite déjà");
                                            } catch (err) { console.log("Ce fichier Normal n'existe pas"); }
                                            try {//---------------------------loading gif file plus
                                                existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                                                console.log("Ce fichier Plus exite déjà");
                                            } catch (err) { console.log("Ce fichier Plus n'existe pas"); }
                                            try {//---------------------------loading gif file hard
                                                existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                                                console.log("Ce fichier Hard exite déjà");
                                            } catch (err) { console.log("Ce fichier Hard n'existe pas"); }
                                            existsgiffile = false;
                                            try {//---------------------------loading gif file server
                                                existsgiffile = fs.readFileSync(path.resolve(`${servgifdir}/${commandname}.js`));
                                                console.log("Ce fichier Serveur exite déjà");
                                            } catch (err) { console.log("Ce fichier Serveur n'existe pas"); }
                                            setTimeout(function () {
                                                if (existngiffile != false || existpgiffile != false || existhgiffile != false) {
                                                    return message.reply(`La commande ,${commandname} existe déjà nativement dans Chaline !`);
                                                }
                                                if (existsgiffile != false) {
                                                    return message.reply(`La commande ,${commandname} existe déjà sur votre serveur !`);
                                                }
                                                console.log("commmande n'existe pas");
                                                var actualdate = new Date();
                                                console.log(actualdate)
                                                datevar = actualdate.toISOString();
                                                giflisturl = argsend
                                                giflisturl.shift() //delete name from list
                                                giflisturljson = JSON.stringify(giflisturl)
                                                console.log(giflisturljson);
                                                fs.appendFile(`${servgifdir}/${commandname}.js`, `module.exports = { //Commande générée par ${message.author.tag}(${message.author.id}) (avec AddGif v1.0 - version newgif)
    name: "${commandname}",
    description: "ajouté par ${message.author.tag}",
    execute(message) {
    const giflist = ${giflisturljson}
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le ${datevar} depuis le channel ${message.channel.name}(${message.channel.id}) sur le serveur ${message.guild.name}(${message.guild.id})`, function (err) {
                                                    if (err) throw err;
                                                    console.log('File is created successfully.');
                                                });
                                                setTimeout(function () {
                                                    reloadgifserver(message.guild.id);
                                                    console.log(`Nouvelle commande générée dans ${servgifdir}/${commandname}.js`);
                                                    client.channels.cache.get("862021850851049492").send(`**-🆕️-** Nouvelle commande générée dans ${servgifdir}/${commandname}.js par ${message.author.tag} pour ${message.guild.name}(${message.guild.id}), gifs :\n${giflisturl}`);
                                                    message.reply(`Nouvelle commande ,${commandname} ajoutée !`);
                                                }, 1000);
                                            }, 1000);
                                        } else { message.reply(`\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\``) }
                                    }
                                }, 500);
                            }
                        })
                    } else {
                        console.log("(folder already exists) ;mygif use on " + message.guild.name);
                        fs.stat(`${servgifdir}/settings${message.guild.id}.json`, function (err, stat) {
                            if (err == null) {
                                try {//---------------------------loading previous
                                    eligibilityread = JSON.parse(`` + fs.readFileSync(path.resolve(`${servgifdir}/settings${message.guild.id}.json`)) + ``);
                                    console.log("Eligibilité chargée")
                                } catch (err) { console.log("! ERREUR : pas d'Eligibilité chargée"); }
                                setTimeout(function () {
                                    if (!eligibilityread) {
                                        message.reply("Nous n'avous pas pu établir votre éligibilité à cette fonctionnalité.\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`")
                                    } else {
                                        if (eligibilityread.elgibility == 1) {
                                            argsend = message.content.slice(8).split(/ +/);
                                            commandname = argsend[0].toLowerCase();
                                            console.log(argsend);
                                            if (commandname == "help" || commandname == "?") {
                                                return message.reply(`Permet d'ajouter des commandes pour des gifs selon la syntaxe suivante :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            if (!argsend[1]) {
                                                return message.reply(`Erreur : Vérifiez le nombre d'arguments !
Pour rappel le commande s'écrit sous la forme :
                > \`;newgif gifname example1.gif example2.gif ...\`
gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.`);
                                            }
                                            existngiffile = false;
                                            existpgiffile = false;
                                            existhgiffile = false;
                                            try {//---------------------------loading gif file normal
                                                existngiffile = fs.readFileSync(path.resolve(`./gif/Normal/${commandname}.js`));
                                                console.log("Ce fichier Normal exite déjà");
                                            } catch (err) { console.log("Ce fichier Normal n'existe pas"); }
                                            try {//---------------------------loading gif file plus
                                                existpgiffile = fs.readFileSync(path.resolve(`./gif/Plus/${commandname}.js`));
                                                console.log("Ce fichier Plus exite déjà");
                                            } catch (err) { console.log("Ce fichier Plus n'existe pas"); }
                                            try {//---------------------------loading gif file hard
                                                existhgiffile = fs.readFileSync(path.resolve(`./gif/Hard/${commandname}.js`));
                                                console.log("Ce fichier Hard exite déjà");
                                            } catch (err) { console.log("Ce fichier Hard n'existe pas"); }
                                            existsgiffile = false;
                                            try {//---------------------------loading gif file server
                                                existsgiffile = fs.readFileSync(path.resolve(`${servgifdir}/${commandname}.js`));
                                                console.log("Ce fichier Serveur exite déjà");
                                            } catch (err) { console.log("Ce fichier Serveur n'existe pas"); }
                                            setTimeout(function () {
                                                if (existngiffile != false || existpgiffile != false || existhgiffile != false) {
                                                    return message.reply(`La commande ,${commandname} existe déjà nativement dans Chaline !`);
                                                }
                                                if (existsgiffile != false) {
                                                    return message.reply(`La commande ,${commandname} existe déjà sur votre serveur !`);
                                                }
                                                console.log("commmande n'existe pas");
                                                var actualdate = new Date();
                                                console.log(actualdate)
                                                datevar = actualdate.toISOString();
                                                giflisturl = argsend
                                                giflisturl.shift() //delete name from list
                                                giflisturljson = JSON.stringify(giflisturl)
                                                console.log(giflisturljson);
                                                fs.appendFile(`${servgifdir}/${commandname}.js`, `module.exports = { //Commande générée par ${message.author.tag}(${message.author.id}) (avec AddGif v1.0 - version newgif)
    name: "${commandname}",
    description: "ajouté par ${message.author.tag}",
    execute(message) {
    const giflist = ${giflisturljson}
    const gifchoisi = Math.floor(Math.random() * (giflist.length));
    message.channel.send(giflist[gifchoisi]);
    }
} //Généré le ${datevar} depuis le channel ${message.channel.name}(${message.channel.id}) sur le serveur ${message.guild.name}(${message.guild.id})`, function (err) {
                                                    if (err) throw err;
                                                    console.log('File is created successfully.');
                                                });
                                                setTimeout(function () {
                                                    reloadgifserver(message.guild.id);
                                                    console.log(`Nouvelle commande générée dans ${servgifdir}/${commandname}.js`);
                                                    client.channels.cache.get("862021850851049492").send(`**-** Nouvelle commande générée dans ${servgifdir}/${commandname}.js par ${message.author.tag} pour ${message.guild.name}(${message.guild.id}), gifs :\n${giflisturl}`);
                                                    message.reply(`Nouvelle commande ,${commandname} ajoutée !`);
                                                }, 1000);
                                            }, 1000);
                                        } else { message.reply(`\n\nVotre serveur n'est pas éligible à cette fonctionnalité :/\nIl s'agit peut être d'une erreur, \`;error demandez pourquoi ?\``) }
                                    }
                                }, 500);
                            } else if (err.code === 'ENOENT') {
                                elgibilitysrv = {
                                    elgibility: 1,
                                    datedelivering: actualdate
                                }
                                const jsonStringcfg = JSON.stringify(elgibilitysrv);
                                fs.writeFile(`${servgifdir}/settings${message.guild.id}.json`, jsonStringcfg, err => {
                                    if (err) {
                                        console.log(`Error writing gif eligibility of ${guildcfg.id}(${guildcfg.name})`, err)
                                        client.channels.cache.get("862021850851049492").send(`**ERR :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} n'a pas pu être créé correctement !`);
                                        message.reply("Une erreur est survenue, veuillez réessayer, si le problème persiste signalez l'erreur \`;error l'erreur\`")
                                    } else {
                                        console.log(`Successfully wrote gif eligibility of ${guildcfg.id}(${guildcfg.name})`)
                                        client.channels.cache.get("862021850851049492").send(`**--- :** ${servgifdir}/settings${message.guild.id}.json du serveur ${message.guild.name} a été créé correctement !`);
                                        message.reply("Mise à jour de l'égibilité du serveur en cours, veuillez réessayer, si le problème persiste signalez l'erreur \`;error l'erreur\`")
                                    }
                                })
                            } else {
                                console.log('Some other error: ', err.code);
                            }
                        });
                    }
                } catch (err) {
                    console.log(err);
                }
            } catch (error) {
                client.channels.cache.get("814214630343835668").send(error);
                message.reply(`Une erreur est survenue !
            Pour rappel le commande s'écrit sous la forme :
            > ;newgif gifname example1.gif example2.gif
            gifname ne doit contenir que des lettres et pas de caractères spéciaux tels que les accents.
Si vous êtes sûrs que l'erreur ne vient pas de vous : \`;error décrivez le problème\``);
            }
        }
    } catch (err) {
        console.log("ERREUR PARTIE GIF GESTION");
        console.error(err);
        return message.reply("Meow ! Une erreur fatale est survenue, heureusement je suis indemne... enfin, je pense.\nSi l'erreur persiste, merci d'en informer les dev \`;error l'erreur\`")
    }
    //---------------------------------------------------------------------------------------------------------------------TROL------------------------
    if (configreact === '1') {
        if (message.content.startsWith('Chaline') && !message.author.bot) { message.reply('Non mais ça va pas de me réveiller comme ça là !'); }
        else if (message.content.startsWith('Vive Chaline') && !message.author.bot) { message.reply('Donne moi des croquettes au lieu de parler'); }
        else if (message.content.startsWith('!tgmee6') && !message.author.bot) { message.channel.send('Oue j\'avoue femre bien ta gueule le bot !'); }
        else if ((message.content.toLowerCase().includes('chaline') || message.content.includes('<@!813744876214550538>')) && !message.author.bot) { message.channel.send('Coucou ^^'); }
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
        if (message.content.startsWith('Coucou Chaline') && message.author.bot) { message.channel.send('Casse toi le bot !'); }
    }
    if (message.content.toLowerCase().startsWith(";clear") && ((message.member.permissions.has('MANAGE_MESSAGES', 1) && !blacklist.includes(message.author.id)) || whitelist.includes(message.author.id))) {
        message.channel.send(`${pxclear}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${pxclear}`)
    }
    if (message.content.startsWith(gifix)) { //----------------------------------------------------------------------------------REPARTITEUR GIFS
        const argif = message.content.slice(gifix.length).split(/ +/); //------------------------------------------------------------COMMANDES , GIF
        const cmdgif = argif.shift().toLocaleLowerCase();
        if (client.cmdgifsn.has(cmdgif) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifn) || configgifn === "e" || whitelist.includes(message.author.id))) { //--------------------------------------------------------NORMAL GIF
            if (cmdgif === "commandlistnormal" && message.member.permissions.has('MANAGE_MESSAGES', 1)) {
                const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
                message.channel.send("Voici la liste des commandes Normales :\n")
                for (const file of cmdgifFilesn) {
                    const cmdgifn = require(`./gif/Normal/${file}`);
                    if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                    else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                }
            }
            try {
                client.cmdgifsn.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
            }
        }
        if (client.cmdgifsp.has(cmdgif) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifp) || configgifp === "e" || whitelist.includes(message.author.id))) { //--------------------------------------------------------PLUS GIF
            if (cmdgif === "commandlistplus" && message.member.permissions.has('MANAGE_MESSAGES', 1)) {
                const cmdgifFilesn = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
                message.channel.send("Voici la liste des commandes Plus :\n")
                for (const file of cmdgifFilesn) {
                    const cmdgifn = require(`./gif/Plus/${file}`);
                    if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                    else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                }
            }
            try {
                client.cmdgifsp.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
            }
        }
        if (client.cmdgifsh.has(cmdgif) && !blacklist.includes(message.author.id) && (message.member.roles.cache.some(role => `<@&${role.id}>` === configgifh) || configgifh === "e" || whitelist.includes(message.author.id))) {//--------------------------------------------------------HARD GIF
            if (cmdgif === "commandlisthard" && message.member.permissions.has('MANAGE_MESSAGES', 1)) {
                const cmdgifFilesn = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));
                message.channel.send("Voici la liste des commandes Hard :\n")
                for (const file of cmdgifFilesn) {
                    const cmdgifn = require(`./gif/Hard/${file}`);
                    if (!cmdgifn.description) { message.channel.send(`${cmdgifn.name}`); }
                    else { message.channel.send(`${cmdgifn.name} : *${cmdgifn.description}*`); }
                }
            }
            try {
                client.cmdgifsh.get(cmdgif).execute(message, argif);
                client.channels.cache.get("814239948759629914").send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            } catch (error) {
                console.error(error);
                client.channels.cache.get("814214630343835668").send(error);
                message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
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
            if (configlog == "d" || configlog == "1") {
                channellog = message.guild.channels.cache.find(ch => ch.name === 'chaline-log');
                if (!channellog) {
                    message.guild.channels.create('chaline-log');
                    setTimeout(function () {
                        channellog = message.guild.channels.cache.find(ch => ch.name === 'chaline-log');
                        channellog.send(`(re)Bonjour <@!${message.guild.ownerID}>, j'ai créé ce channel pour y mettre mes logs, je vous conseille de le rendre accessible uniquement aux administrateurs 😉️\nVous pouvez décider de modifier le channel des logs ou de désactiver les logs en paramétrant avec \`;config help\``);
                        channellog.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
                    }, 1000)
                } else {
                    channellog.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
                }
            }
            else if (configlog == "n" || configlog == "0") {
                console.log(message.guild.name + " n'a pas de channel de logs");
            }
            else {
                channellogid = configlog.replace('<#', '').replace('>', '')
                channellog = client.channels.cache.get(channellogid);
                channellog.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            }
            if (!serverlogchannel) {
                console.log(serverlogchannel)
                console.log(serverlog.channels.cache.find(ch => ch.name === `${servernametolog}-log`))
                serverlog.channels.create(`${servernametolog}-log`);
            } else {
                serverlogchannel.send(`__${message.author.tag}__ a utilisé \`${message.content}\` sur **${message.guild.name}** dans *#${message.channel.name}* dans la catégrorie *${message.channel.parentID}*`);
            }
            console.log(`${message.author.tag} a utilisé ${message.content} sur ${message.guild.name} dans #${message.channel.name} dans la catégrorie ${message.channel.parentID}`);
        } catch (error) {
            console.error(error);
            client.channels.cache.get("814214630343835668").send(error);
            message.reply("Meow !\nIl y a un chat dans le paté,\nSi l'erreur persiste merci de report l'erreur \`;error l'erreur\`");
        }
    }
});


//----------------------------------------------------------------------------------------------------------NEW MEMBER----------------------------------------------------------------------

client.on('guildMemberAdd', async member => {
    guildwcfg = member.guild
    guildwid = guildwcfg.id;
    confwelcomeserv = client.cfgsrvs.get(guildwid + "welcome")
    if (!confwelcomeserv) {
        //-------------------------------------------------STOP
        channelidwelcome = 'n';
    } else {
        //-------------------------------------------------INIT
        channelidwelcome = confwelcomeserv.channelidwelcome;
        prewelcomemention = confwelcomeserv.prewelcomemention;
        welcomemention = confwelcomeserv.welcomemention;
        postwelcomemention = confwelcomeserv.postwelcomemention;
        //-------------------------------------------------GENERAL
        showwelcomeimage = confwelcomeserv.showwelcomeimage;
        backgroundimage = confwelcomeserv.backgroundimage;
        xcan = confwelcomeserv.xcan;
        ycan = confwelcomeserv.ycan;
        //-------------------------------------------------PROFILEPICT
        profilepict = confwelcomeserv.profilepict;
        diameter = confwelcomeserv.diameter;
        logocenterdx = confwelcomeserv.logocenterdx;
        logocenterdy = confwelcomeserv.logocenterdy;
        //-------------------------------------------------USERNAME
        profileusername = confwelcomeserv.profileusername
        userdx = confwelcomeserv.userdx;
        userdy = confwelcomeserv.userdy;
        alignfontuser = confwelcomeserv.alignfontuser;
        maxsizexfontuser = confwelcomeserv.maxsizexfontuser;
        fontuser = confwelcomeserv.fontuser;
        colorfontuser = confwelcomeserv.colorfontuser;
        //-------------------------------------------------MEMBERCOUNT
        showmembercount = confwelcomeserv.showmembercount;
        mcountdx = confwelcomeserv.mcountdx;
        mcountdy = confwelcomeserv.mcountdy;
        alignfontmcount = confwelcomeserv.alignfontmcount;
        maxsizexfontmcount = confwelcomeserv.maxsizexfontmcount;
        fontmcount = confwelcomeserv.fontmcount;
        colorfontmcount = confwelcomeserv.colorfontmcount;
    }
    try {
        numbernewmember = member.guild.memberCount;
        //console.log(channelidwelcome);
        if (channelidwelcome == "n") { return } //------------------------------------------------WELCOME ?
        if (showwelcomeimage == "y") {
            //--------------------------------------------------CREATE CANVAS
            const canvas = Canvas.createCanvas(xcan, ycan);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage(backgroundimage);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            //------------------------------TEXT
            function fitTextOnCanvas(text, fontused, distx, disty, sizex) {
                var fontsize = xcan;
                do {
                    fontsize--;
                    ctx.font = fontsize + "px " + fontused;
                } while (ctx.measureText(text).width > sizex)
                ctx.fillText(text, distx, disty);
            }

            if (profileusername == "y") {//-----------------------------PSEUDO
                ctx.fillStyle = colorfontuser;
                ctx.textAlign = alignfontuser;
                fitTextOnCanvas(`${member.user.tag}`, fontuser, userdx, userdy, maxsizexfontuser);
            }

            if (showmembercount == "y") {//--------------------------MEMBER COUNT
                ctx.fillStyle = colorfontmcount;
                ctx.textAlign = alignfontmcount;
                fitTextOnCanvas(`${numbernewmember}`, fontmcount, mcountdx, mcountdy, maxsizexfontmcount);
            }
            if (profilepict == "y") {//-------------------------LOGO MEMBER
                ctx.beginPath();
                ctx.arc(logocenterdx, logocenterdy, diameter / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();

                const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
                ctx.drawImage(avatar, logocenterdx - diameter / 2, logocenterdy - diameter / 2, diameter, diameter);
            }

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcomimg.jpg');
            if (welcomemention == "m") { client.channels.cache.get(channelidwelcome).send(`${prewelcomemention}${member}${postwelcomemention}`, attachment); }
            if (welcomemention == "y") { client.channels.cache.get(channelidwelcome).send(`${prewelcomemention}${postwelcomemention}`, attachment); }
            if (welcomemention == "n") { client.channels.cache.get(channelidwelcome).send(attachment); }
        } else {
            if (welcomemention == "m") { client.channels.cache.get(channelidwelcome).send(`${prewelcomemention}${member}${postwelcomemention}`); }
            if (welcomemention == "y") { client.channels.cache.get(channelidwelcome).send(`${prewelcomemention}${postwelcomemention}`); }
        }


    } catch (err) { console.log('------------------------ERROR WELCOMING-----------------------'); console.error(err); console.log(`----------------${guildwid}------------------`); }
});

client.login("ODE2NzI3MTM2Mjg2MTQ2NTcw.YD_Kaw.ITTSCvGcXdxA1bie3CWp2y_V--M");//token