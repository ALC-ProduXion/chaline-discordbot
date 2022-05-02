const fs = require('fs');
const path = require('path');
const { client } = require("../index.js");
const logger = require("./logger.js");
const loader = require("./loader.js");

module.exports = {
    //reloads nph gifs with message
    reloadgifs: function () {
        logger.all("Reload des Gifs natifs de Chaline en cours...");
        loader.relgifs()
    },
    // reloads server gif with message
    reloadgifserver: function (idserverg) {
        logger.all("Reload des Gifs du serveur " + idserverg + " de en cours...");
        loader.relgifsrv(idserverg, 0)
    },
    //reload all gifs from all servers
    reloadallgifserver: function () {
        const servdir = "./gif/servers/"
        const listservers = fs.readdirSync(servdir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
        for (const dir of listservers) {
            loader.relgifsrv(dir, 1)
        }
    },



}