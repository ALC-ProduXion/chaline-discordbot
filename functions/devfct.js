const { client } = require("../index.js");
const logger = require("./logger.js");

module.exports = {
    // boost
    boost: function (memberinfo) {
        const { botchannels } = require("../index.js");
        const imaGen = require("./imaGen.js");
        logger.all(`Simulation : ${memberinfo.user.tag} a boosté le serveur`);
        imaGen.boost(memberinfo);
    },
    welcome: function (memberinfo) {
        const { botchannels } = require("../index.js");
        const imaGen = require("./imaGen.js");
        logger.all(`Simulation ${memberinfo.user.tag} a rejoint le serveur`);
        imaGen.welcome(memberinfo);
    },
};