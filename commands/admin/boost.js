const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');

module.exports = {
    name: 'boost',
    description: 'Configurez comment Chaline remercie les membres boostant le serveur',
    execute(message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            const { client } = require("../../index.js");

            const guildcfg = message.guild;
            const guildid = guildcfg.id;

            if (args[0] == "read") {
                let rawcfgread = fs.readFileSync(path.resolve(`./servers/${guildcfg.id}boost.json`));
                let cfgread = JSON.stringify(JSON.parse(rawcfgread));
                setTimeout(function () { message.channel.send(`Voici la configuration de boost actuelle :\n\`\`\`json\n ${cfgread}\`\`\``) }, 2000);
            }

            // Update
            else if (args[0] == "update") {
                previousconfig = false;
                if (!args[26]) { return message.reply("Erreur, vérifiez d'avoir le bon nombre d'arguments !") }
                try {// Loading previous
                    previousconfig = JSON.parse(`` + fs.readFileSync(path.resolve(`./servers/${guildcfg.id}boost.json`)) + ``);
                    console.log("Configuration de boost précédente rechargée")
                } catch (err) { console.log("pas de configuration de boost précédente à recharger"); }
                setTimeout(function () {
                    try {
                        if (!previousconfig) {
                            message.channel.send("Il n'y a pas de configuration de boost précédente a recharger");
                            //-------------------------------------------------INIT
                            channelidboostarg = args[1].replace('<#', '').replace('>', '');
                            if (args[2] == "n") { preboostmentionarg = "" } else { preboostmentionarg = args[2].split("+").join(" "); }
                            boostmentionarg = args[3];
                            if (args[4] == "n") { postboostmentionarg = "" } else { postboostmentionarg = args[4].split("+").join(" "); }
                            //-------------------------------------------------GENERAL
                            showboostimagearg = args[5];
                            if (args[6] == "n") { backgroundimagearg = 'https://media.discordapp.net/attachments/820236448590331924/970686295984717824/chalineboost1.jpg' } else { backgroundimagearg = args[6] }
                            if (args[7] == "n") { xcanarg = 900 } else { if (parseInt(args[7]) <= 1000) { xcanarg = parseInt(args[7]) } else { xcanarg = 1000; message.channel.send("> Largeur trop élevée : doit être inférieure à 1000px") } }
                            if (args[8] == "n") { ycanarg = 500 } else { if (parseInt(args[8]) <= 1000) { ycanarg = parseInt(args[8]) } else { ycanarg = 1000; message.channel.send("> Hauteur trop élevée : doit être inférieure à 1000px") } }
                            //-------------------------------------------------PROFILEPICT
                            profilepictarg = args[9];
                            if (args[10] == "n") { diameterarg = 300 } else { diameterarg = parseInt(args[10]) }
                            if (args[11] == "n") { logocenterdxarg = 200 } else { logocenterdxarg = parseInt(args[11]) }
                            if (args[12] == "n") { logocenterdyarg = 200 } else { logocenterdyarg = parseInt(args[12]) }
                            //-------------------------------------------------USERNAME
                            profileusernamearg = args[13];
                            if (args[14] == "n") { userdxarg = 366 } else { userdxarg = parseInt(args[14]) }
                            if (args[15] == "n") { userdyarg = 295 } else { userdyarg = parseInt(args[15]) }
                            if (args[16] == "n") { alignfontuserarg = "left" } else { alignfontuserarg = args[16] }
                            if (args[17] == "n") { maxsizexfontuserarg = 420 } else { maxsizexfontuserarg = parseInt(args[17]) }
                            if (args[18] == "n") { fontuserarg = "Arial Black" } else { fontuserarg = args[18].split("+").join(" "); }
                            if (args[19] == "n") { colorfontuserarg = "#d2eff0" } else { colorfontuserarg = args[19] }

                            cfgserverjson = {
                                //-------------------------------------------------INIT
                                channelidboost: channelidboostarg,
                                preboostmention: preboostmentionarg,
                                boostmention: boostmentionarg,
                                postboostmention: postboostmentionarg,
                                //-------------------------------------------------GENERAL
                                showboostimage: showboostimagearg,
                                backgroundimage: backgroundimagearg,
                                xcan: xcanarg,
                                ycan: ycanarg,
                                //-------------------------------------------------PROFILEPICT
                                profilepict: profilepictarg,
                                diameter: diameterarg,
                                logocenterdx: logocenterdxarg,
                                logocenterdy: logocenterdyarg,
                                //-------------------------------------------------USERNAME
                                profileusername: profileusernamearg,
                                userdx: userdxarg,
                                userdy: userdyarg,
                                alignfontuser: alignfontuserarg,
                                maxsizexfontuser: maxsizexfontuserarg,
                                fontuser: fontuserarg,
                                colorfontuser: colorfontuserarg,
                            }
                            const jsonStringcfg = JSON.stringify(cfgserverjson);
                            fs.writeFile(`./servers/${guildcfg.id}boost.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing boost config of ${guildcfg.id}(${guildcfg.name})`, err);
                                } else {
                                    console.log(`Successfully wrote boost config of ${guildcfg.id}(${guildcfg.name})`);
                                }
                            });
                            client.cfgsrvs.set(guildid + "boost", cfgserverjson);
                            message.channel.send(`Configuration de boost mise à jour !\nVous pouvez consulter votre configuration de boost en tapant \`;boost read\``);
                        } else {
                            message.channel.send("La configuration de boost précédente a bien été rechargée");
                            /* MODEL : 
                            if (args[X] == "s") {arg = previousconfig.setting} else {arg = args[X]}
                            It will take the previous value if the argument is s
                            */
                            //-------------------------------------------------INIT
                            if (args[1] == "s") { channelidboostarg = previousconfig.channelidboost } else { channelidboostarg = args[1].replace('<#', '').replace('>', '') }
                            if (args[2] == "s") { preboostmentionarg = previousconfig.preboostmention } else if (args[2] == "n") { preboostmentionarg = "" } else { preboostmentionarg = args[2].split("+").join(" "); }
                            if (args[3] == "s") { boostmentionarg = previousconfig.boostmention } else { boostmentionarg = args[3] }
                            if (args[4] == "s") { postboostmentionarg = previousconfig.postboostmention } else if (args[4] == "n") { postboostmentionarg = "" } else { postboostmentionarg = args[4].split("+").join(" "); }
                            //-------------------------------------------------GENERAL
                            if (args[5] == "s") { showboostimagearg = previousconfig.showboostimage } else { showboostimagearg = args[5] }
                            if (args[6] == "s") { backgroundimagearg = previousconfig.backgroundimage } else if (args[6] == "n") { backgroundimagearg = 'https://media.discordapp.net/attachments/820236448590331924/970686295984717824/chalineboost1.jpg' } else { backgroundimagearg = args[6] }
                            if (args[7] == "s") { xcanarg = previousconfig.xcan } else if (args[7] == "n") { xcanarg = 900 } else { if (parseInt(args[7]) <= 1000) { xcanarg = parseInt(args[7]) } else { xcanarg = 1000; message.channel.send("> Largeur trop élevée : doit être inférieure à 1000px") } }
                            if (args[8] == "s") { ycanarg = previousconfig.ycan } else if (args[8] == "n") { ycanarg = 500 } else { if (parseInt(args[8]) <= 1000) { ycanarg = parseInt(args[8]) } else { ycanarg = 1000; message.channel.send("> Hauteur trop élevée : doit être inférieure à 1000px") } }
                            //-------------------------------------------------PROFILEPICT
                            if (args[9] == "s") { profilepictarg = previousconfig.profilepict } else { profilepictarg = args[9] }
                            if (args[10] == "s") { diameterarg = previousconfig.diameter } else if (args[10] == "n") { diameterarg = 300 } else { diameterarg = parseInt(args[10]) }
                            if (args[11] == "s") { logocenterdxarg = previousconfig.logocenterdx } else if (args[11] == "n") { logocenterdxarg = 200 } else { logocenterdxarg = parseInt(args[11]) }
                            if (args[12] == "s") { logocenterdyarg = previousconfig.logocenterdy } else if (args[12] == "n") { logocenterdyarg = 200 } else { logocenterdyarg = parseInt(args[12]) }
                            //-------------------------------------------------USERNAME
                            if (args[13] == "s") { profileusernamearg = previousconfig.profileusername } else { profileusernamearg = args[13] }
                            if (args[14] == "s") { userdxarg = previousconfig.userdx } else if (args[14] == "n") { userdxarg = 366 } else { userdxarg = parseInt(args[14]) }
                            if (args[15] == "s") { userdyarg = previousconfig.userdy } else if (args[15] == "n") { userdyarg = 295 } else { userdyarg = parseInt(args[15]) }
                            if (args[16] == "s") { alignfontuserarg = previousconfig.alignfontuser } else if (args[16] == "n") { alignfontuserarg = "left" } else { alignfontuserarg = args[16] }
                            if (args[17] == "s") { maxsizexfontuserarg = previousconfig.maxsizexfontuser } else if (args[17] == "n") { maxsizexfontuserarg = 420 } else { maxsizexfontuserarg = parseInt(args[17]) }
                            if (args[18] == "s") { fontuserarg = previousconfig.fontuser } else if (args[18] == "n") { fontuserarg = "Arial Black" } else { fontuserarg = args[18].split("+").join(" "); }
                            if (args[19] == "s") { colorfontuserarg = previousconfig.colorfontuser } else if (args[19] == "n") { colorfontuserarg = "#d2eff0" } else { colorfontuserarg = args[19] }

                            cfgserverjson = {
                                //-------------------------------------------------INIT
                                channelidboost: channelidboostarg,
                                preboostmention: preboostmentionarg,
                                boostmention: boostmentionarg,
                                postboostmention: postboostmentionarg,
                                //-------------------------------------------------GENERAL
                                showboostimage: showboostimagearg,
                                backgroundimage: backgroundimagearg,
                                xcan: xcanarg,
                                ycan: ycanarg,
                                //-------------------------------------------------PROFILEPICT
                                profilepict: profilepictarg,
                                diameter: diameterarg,
                                logocenterdx: logocenterdxarg,
                                logocenterdy: logocenterdyarg,
                                //-------------------------------------------------USERNAME
                                profileusername: profileusernamearg,
                                userdx: userdxarg,
                                userdy: userdyarg,
                                alignfontuser: alignfontuserarg,
                                maxsizexfontuser: maxsizexfontuserarg,
                                fontuser: fontuserarg,
                                colorfontuser: colorfontuserarg,
                            }
                            const jsonStringcfg = JSON.stringify(cfgserverjson);
                            fs.writeFile(`./servers/${guildcfg.id}boost.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing boost config of ${guildcfg.id}(${guildcfg.name})`, err);
                                } else {
                                    console.log(`Successfully wrote boost config of ${guildcfg.id}(${guildcfg.name})`);
                                }
                            });
                            client.cfgsrvs.set(guildid + "boost", cfgserverjson);
                            message.channel.send(`Configuration de boost mise à jour !\nVous pouvez consulter votre configuration de boost en tapant \`;boost read\``);
                        }
                    } catch (err) { console.error(err); }
                }, 2000);
            }
            else if (args[0] == "help" || !args[0]) {
                message.channel.send(`Tape \`;boost read\` pour lire la config de boost de ton serveur\n
                Tape \`;boost update channelidboost preboostmention... etc tous les éléments présentés ci-dessous (ne pas mettre les //---CATEGORIES, c'est juste pour rendre ce message d'aide plus lisible)\`\nn signifie toujours non, ou par défaut\n
                //---------------------------------------------------MESSAGE
                > channelidboost = n ou channel : c'est le channel de boost
                > preboostmention = n ou texte+a+envoyer+dans+le+channel : texte à envoyer dans le channel (remplacer espaces par +)
                > boostmention = n pour ne pas envoyer de message, y pour envoyer un message, m pour mentionner la personne qui a boosté
                > postboostmention = n ou fin+du+message. C'est la fin du message qui apparaîtra après la mention s'il y en a une.\n
                //-------------------------------------------------BACKGROUNDIMAGE
                > showboostimage = y ou n. Envoyer une carte de boost (c'est une image)
                > backgroundimage = liendelimagedefond.jpg Il s'agit de l'image de fond.
                > xcan = taille en pixels de la largeur de votre image : max 1000px
                > ycan = taille en pixels de la hauteur de votre image : max 1000px\n
                //-------------------------------------------------PROFILEPICT
                > profilepict = y ou n. Afficher ou non la photo de profil de la personne qui a boosté.
                > diameter = diamètre de la photo de profil en pixels.
                > logocenterdx = position horizontale par rapport au côté gauche en pixels de la photo de profil.
                > logocenterdy = position verticale par rapport au côté haut en pixels de la photo de profil.\n
                //-------------------------------------------------USERNAME`);
                message.channel.send(`> profileusername = y ou n. Afficher ou non le pseudo de la personne qui a boosté.
                > userdx = position horizontale par rapport au côté gauche en pixels du pseudo de la personne qui a boosté.
                > userdy = position verticale par rapport au côté haut en pixels du pseudo de la personne qui a boosté.
                > alignfontuser = right ou center ou left. Alignement du texte du pseudo de la personne qui a boosté.
                > maxsizexfontuser = Longueur maximale du pseudo de la personne qui a boosté en pixels.
                > fontuser = police d'écriture du texte du pseudo de la personne qui a boosté.
                > colorfontuser = #ffffff Couleur du texte du pseudo de la personne qui a boosté.\n
                `);
                message.channel.send(`
                Voici une commande que vous pouvez copier coller pour modifier plus facilement sans oublier de paramètres : 
                \`;boost update channelidboost preboostmention boostmention postboostmention showboostimage backgroundimage xcan ycan profilepict diameter logocenterdx logocenterdy profileusername userdx userdy alignfontuser maxsizexfontuser fontuser colorfontuser showmembercount mcountdx mcountdy alignfontmcount maxsizexfontmcount fontmcount colorfontmcount\`\nVoici la commande pour utiliser le mode par défaut : 
                \`;boost update channel Merci+à+toi+ m +! y n n n y n n n y n n n n n n y n n n n n n\``)
            }
        }
    }
}
