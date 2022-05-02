console.log("DÉMARRAGE DE Chaline")
console.log("-----------------------------------INITIALISATION--------------------------------------------");

// --- INTIALIZING BOT ---

// Import main infos
const { appID, publicKey, token } = require('./config/credentials.json');

// Import librairies
const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');
// Client creation and export
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
});
exports.client = client;


// Import functions
const random = require("./functions/random.js");
const logger = require("./functions/logger.js");
const loader = require("./functions/loader.js");
const init = require("./functions/init.js");
const afk = require("./functions/afk.js");
const serverfct = require("./functions/serverfct.js");
const messageCheck = require("./functions/messageCheck.js");
const triggerCMD = require("./functions/triggerCMD.js");
const imaGen = require("./functions/imaGen.js");
const dev = require("./functions/dev.js");
const devfct = require("./functions/devfct.js");

// Init commands
const botchannels = init.ChannelListLoader()
exports.botchannels = botchannels;
exports.dataJSON = init.configList();
const mp = require("./commands/mpcommand.js");
loader.loadcommands();
init.gifLoading();


// Init afk
afk.initafk();

// Init Config servers
init.servCfgLoading();


// when Chaline logged in Discord
client.once('ready', () => {
    init.activityMessage();
    init.loaderPostReady();
});


// Triggered when messages sent
client.on('message', message => {
    // Triggered when message is private
    if (!message.channel.guild) {
        try {
            mp.onMessage(message);
        } catch (error) {
            message.reply("Une erreur s'est produite. Si l'erreur ne vient pas de vous signalez l'erreur en indiquant ce que vous souhaitiez faire `;error l'erreur`\nErreur : `MSG-MP-0-0-MPCMD");
        }
        return;
    }

    if (mutedservers.includes(message.guild.id)) return;
    // Then if not private and the server is not muted
    const guildcfg = message.guild
    const guildid = guildcfg.id;

    try {
        // dev function
        dev.testbot(message);

        // Is this message mentionning afk people ?
        afk.checkafk(message);

        // Check if the server has a config
        serverfct.checkSrvCfg(guildid);

        // message is examinated
        messageCheck.reactChaline(message);
        messageCheck.general(message);

        // trigger command if it is
        triggerCMD.gif(message);
        triggerCMD.classic(message);

    } catch (error) {
        console.error(error);
        client.channels.cache.get(botchannels.errorChannel).send(`${message.author.tag}(id:${message.author.id}) a généré une erreur depuis le serveur ${message.guild.name} (channel : ${message.channel.id}) :\n\n ${message.content}`);
    }
});


// triggered when a member join the server
client.on('guildMemberAdd', async member => {
    if (mutedservers.includes(member.guild.id)) return;
    // Then if server is not muted
    imaGen.welcome(member);
});


// triggered when there is a member update
client.on('guildMemberUpdate', (oldMember, newMember) => {
    if (mutedservers.includes(newMember.guild.id)) return;
    // when a member boost a server not muted
    if (oldMember.premiumSince !== newMember.premiumSince) {
        imaGen.boost(member);
    }
});


client.login(token);//token