const { client } = require("../index.js");

module.exports = {
    // log in discord channel & console
    all: function (ttolog) {
        const { botchannels } = require("../index.js");
        console.log(ttolog);
        try {
            if (ttolog == "" || ttolog == [] || !ttolog) return
            client.channels.cache.get(botchannels.logChannel).send(ttolog);
        } catch (error) {
            console.error(error);
        }
    },

    // log only in discord channel
    channel: function (ttolog) {
        const { botchannels } = require("../index.js");
        try {
            if (ttolog == "" || ttolog == [] || !ttolog) return
            client.channels.cache.get(botchannels.logChannel).send(ttolog);
        } catch (error) {
            console.error(error);
        }
    },
};