module.exports = {
    // load list of channels
    checkSrvCfg: function (guildid) {
        const { client } = require("../index.js");
        confserv = client.cfgsrvs.get(guildid)
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
    }
}