const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const { client } = require("../index.js");
const logger = require("./logger.js");
const loader = require("./loader.js");
const triggerload = require("./triggerload.js");

module.exports = {
    // load list of channels
    ChannelListLoader: function () {
        rawbotconfig = fs.readFileSync(path.resolve('config/botconfig.json'));
        return JSON.parse(rawbotconfig);
    },
    // load json conf
    configList: function () {
        // loads people that can use commands everywhere
        rawwhitelist = fs.readFileSync(path.resolve('config/whitelist.json'));
        whitelist = JSON.parse(rawwhitelist);
        // loads people who can't use chaline anymore
        rawwblacklist = fs.readFileSync(path.resolve('config/blacklist.json'));
        blacklist = JSON.parse(rawwblacklist);
        // loads servers in which bot wont be triggered
        rawmutedservers = fs.readFileSync(path.resolve('config/mutedservers.json'));
        mutedservers = JSON.parse(rawmutedservers);
        // loads chaline devs
        rawdevlist = fs.readFileSync(path.resolve('config/devlist.json'));
        devlist = JSON.parse(rawdevlist);
        // loads user with full power on it
        rawfullpower = fs.readFileSync(path.resolve('config/fullpower.json'));
        fullpower = JSON.parse(rawfullpower);
        // detection words
        rawbadCat = fs.readFileSync(path.resolve('config/badcat.json'));
        badCat = JSON.parse(rawbadCat);
        rawgoodCat = fs.readFileSync(path.resolve('config/goodcat.json'));
        goodCat = JSON.parse(rawgoodCat);
        // list of words that awakes 
        rawreactchaline = fs.readFileSync(path.resolve('config/reactchaline.json'));
        reactchaline = JSON.parse(rawreactchaline);
        // list of *historical* commands that can't be deleted by command
        rawundeletablecommand = fs.readFileSync(path.resolve('config/supercmd.json'));
        undeletablecommand = JSON.parse(rawundeletablecommand);

        dataJSON = {
            whitelist: whitelist,
            blacklist: blacklist,
            devlist: devlist,
            badCat: badCat,
            goodCat: goodCat,
            reactchaline: reactchaline,
            undeletablecommand: undeletablecommand
        }
        return dataJSON;
    },
    gifLoading: function () {

        client.cmdgifsn = new Discord.Collection();
        client.cmdgifsp = new Discord.Collection();
        client.cmdgifsh = new Discord.Collection();
        client.cmdgifss = new Discord.Collection();

        console.log("Chargement des gifs natifs de Chaline :");
        loader.relgifs();
        console.log("------------------------------------------------");
        console.log("Chargement des gifs personnalisés des serveurs :");
        triggerload.reloadallgifserver();
    },

    servCfgLoading: function () {
        console.log("------------------------------------------------");
        console.log("Chargement des configs des serveurs : ");
        client.cfgsrvs = new Discord.Collection();
        loader.cfgSrvLoader()
    },
    // Init the bot activity
    activityMessage: function () {
        // playling list
        rawstatuslist = fs.readFileSync(path.resolve('config/statuslist.json'));
        statusList = JSON.parse(rawstatuslist);
        // linstening list
        rawlistenlist = fs.readFileSync(path.resolve('config/listenlist.json'));
        listenList = JSON.parse(rawlistenlist);
        // each 50s a random message is chosen
        client.user.setActivity(`waking up...`, { type: 'PLAYING' });
        setInterval(() => {
            statustype = Math.floor(Math.random() * 4) + 1;
            if (statustype === 1) {
                //choisi une activité au hasard
                const nbstatus = Math.floor(Math.random() * (listenList.length));
                client.user.setActivity(listenList[nbstatus], { type: 'LISTENING' });
            }
            else if (statustype === 2) {
                const cmdgifFilesn = fs.readdirSync('./gif/Normal').filter(file => file.endsWith('.js'));
                const cmdgifFilesp = fs.readdirSync('./gif/Plus').filter(file => file.endsWith('.js'));
                const cmdgifFilesh = fs.readdirSync('./gif/Hard').filter(file => file.endsWith('.js'));

                totalnumofcmdgif = cmdgifFilesn.length + cmdgifFilesp.length + cmdgifFilesh.length;

                client.user.setActivity(`répandre des gif (${totalnumofcmdgif} commandes de gif)`, { type: 'PLAYING' });
            }
            else if (statustype >= 2) {
                //choisi une activité au hasard
                const nbstatus = Math.floor(Math.random() * (statusList.length));
                client.user.setActivity(statusList[nbstatus], { type: 'PLAYING' });
            }
        }, 50000);
    },
    loaderPostReady: function () {
        loader.emojisLoader();
        // message post ready
        const { botchannels } = require("../index.js");
        client.channels.cache.get(botchannels.statusChannel).send("**BOT ONLINE** : Oah j'ai un de ces mal de crâne...");
        logger.all('---------------------------------------------------------------------------------------------\nInitialisation réussie !')
    }

}