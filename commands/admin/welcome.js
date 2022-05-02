const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');

module.exports = {
    name: 'welcome',
    description: 'Configurez comment Chaline accueillera les nouveaux arrivants',
    execute(message, args) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            const { client } = require("../../index.js");

            const guildcfg = message.guild;
            const guildid = guildcfg.id;

            if (args[0] == "read") {
                let rawcfgread = fs.readFileSync(path.resolve(`./servers/${guildcfg.id}welcome.json`));
                let cfgread = JSON.stringify(JSON.parse(rawcfgread));
                setTimeout(function () { message.channel.send(`Voici la configuration de bienvenue actuelle :\n\`\`\`json\n ${cfgread}\`\`\``) }, 2000);
            }

            // Update
            else if (args[0] == "update") {
                previousconfig = false;
                if (!args[26]) { return message.reply("Erreur, vérifiez d'avoir le bon nombre d'arguments !") }
                try {// Loading previous
                    previousconfig = JSON.parse(`` + fs.readFileSync(path.resolve(`./servers/${guildcfg.id}welcome.json`)) + ``);
                    console.log("Configuration de bienvenue précédente rechargée")
                } catch (err) { console.log("pas de configuration de bienvenue précédente à recharger"); }
                setTimeout(function () {
                    try {
                        if (!previousconfig) {
                            message.channel.send("Il n'y a pas de configuration de bienvenue précédente a recharger");
                            //-------------------------------------------------INIT
                            channelidwelcomearg = args[1].replace('<#', '').replace('>', '');
                            if (args[2] == "n") { prewelcomementionarg = "" } else { prewelcomementionarg = args[2].split("+").join(" "); }
                            welcomementionarg = args[3];
                            if (args[4] == "n") { postwelcomementionarg = "" } else { postwelcomementionarg = args[4].split("+").join(" "); }
                            //-------------------------------------------------GENERAL
                            showwelcomeimagearg = args[5];
                            if (args[6] == "n") { backgroundimagearg = 'https://cdn.discordapp.com/attachments/820236448590331924/820415130655260755/chalinewelcome3-1.jpg' } else { backgroundimagearg = args[6] }
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
                            //-------------------------------------------------MEMBERCOUNT
                            showmembercountarg = args[20];
                            if (args[21] == "n") { mcountdxarg = 755 } else { mcountdxarg = parseInt(args[21]) }
                            if (args[22] == "n") { mcountdyarg = 444 } else { mcountdyarg = parseInt(args[22]) }
                            if (args[23] == "n") { alignfontmcountarg = "left" } else { alignfontmcountarg = args[23] }
                            if (args[24] == "n") { maxsizexfontmcountarg = 100 } else { maxsizexfontmcountarg = parseInt(args[24]) }
                            if (args[25] == "n") { fontmcountarg = "Outlier" } else { fontmcountarg = args[25].split("+").join(" "); }
                            if (args[26] == "n") { colorfontmcountarg = "#6f7f80" } else { colorfontmcountarg = args[26] }

                            cfgserverjson = {
                                //-------------------------------------------------INIT
                                channelidwelcome: channelidwelcomearg,
                                prewelcomemention: prewelcomementionarg,
                                welcomemention: welcomementionarg,
                                postwelcomemention: postwelcomementionarg,
                                //-------------------------------------------------GENERAL
                                showwelcomeimage: showwelcomeimagearg,
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
                                //-------------------------------------------------MEMBERCOUNT
                                showmembercount: showmembercountarg,
                                mcountdx: mcountdxarg,
                                mcountdy: mcountdyarg,
                                alignfontmcount: alignfontmcountarg,
                                maxsizexfontmcount: maxsizexfontmcountarg,
                                fontmcount: fontmcountarg,
                                colorfontmcount: colorfontmcountarg,
                            }
                            const jsonStringcfg = JSON.stringify(cfgserverjson);
                            fs.writeFile(`./servers/${guildcfg.id}welcome.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing welcome config of ${guildcfg.id}(${guildcfg.name})`, err);
                                } else {
                                    console.log(`Successfully wrote welcome config of ${guildcfg.id}(${guildcfg.name})`);
                                }
                            });
                            client.cfgsrvs.set(guildid + "welcome", cfgserverjson);
                            message.channel.send(`Configuration de bienvenue mise à jour !\nVous pouvez consulter votre configuration de bienvenue en tapant \`;welcome read\``);
                        } else {
                            message.channel.send("La configuration de bienvenue précédente a bien été rechargée");
                            /* MODEL : 
                            if (args[X] == "s") {arg = previousconfig.setting} else {arg = args[X]}
                            It will take the previous value if the argument is s
                            */
                            //-------------------------------------------------INIT
                            if (args[1] == "s") { channelidwelcomearg = previousconfig.channelidwelcome } else { channelidwelcomearg = args[1].replace('<#', '').replace('>', '') }
                            if (args[2] == "s") { prewelcomementionarg = previousconfig.prewelcomemention } else if (args[2] == "n") { prewelcomementionarg = "" } else { prewelcomementionarg = args[2].split("+").join(" "); }
                            if (args[3] == "s") { welcomementionarg = previousconfig.welcomemention } else { welcomementionarg = args[3] }
                            if (args[4] == "s") { postwelcomementionarg = previousconfig.postwelcomemention } else if (args[4] == "n") { postwelcomementionarg = "" } else { postwelcomementionarg = args[4].split("+").join(" "); }
                            //-------------------------------------------------GENERAL
                            if (args[5] == "s") { showwelcomeimagearg = previousconfig.showwelcomeimage } else { showwelcomeimagearg = args[5] }
                            if (args[6] == "s") { backgroundimagearg = previousconfig.backgroundimage } else if (args[6] == "n") { backgroundimagearg = 'https://cdn.discordapp.com/attachments/820236448590331924/820415130655260755/chalinewelcome3-1.jpg' } else { backgroundimagearg = args[6] }
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
                            //-------------------------------------------------MEMBERCOUNT
                            if (args[20] == "s") { showmembercountarg = previousconfig.showmembercount } else { showmembercountarg = args[20] }
                            if (args[21] == "s") { mcountdxarg = previousconfig.mcountdx } else if (args[21] == "n") { mcountdxarg = 755 } else { mcountdxarg = parseInt(args[21]) }
                            if (args[22] == "s") { mcountdyarg = previousconfig.mcountdy } else if (args[22] == "n") { mcountdyarg = 444 } else { mcountdyarg = parseInt(args[22]) }
                            if (args[23] == "s") { alignfontmcountarg = previousconfig.alignfontmcount } else if (args[23] == "n") { alignfontmcountarg = "left" } else { alignfontmcountarg = args[23] }
                            if (args[24] == "s") { maxsizexfontmcountarg = previousconfig.maxsizexfontmcount } else if (args[24] == "n") { maxsizexfontmcountarg = 100 } else { maxsizexfontmcountarg = parseInt(args[24]) }
                            if (args[25] == "s") { fontmcountarg = previousconfig.fontmcount } else if (args[25] == "n") { fontmcountarg = "Outlier" } else { fontmcountarg = args[25].split("+").join(" "); }
                            if (args[26] == "s") { colorfontmcountarg = previousconfig.colorfontmcount } else if (args[26] == "n") { colorfontmcountarg = "#6f7f80" } else { colorfontmcountarg = args[26] }

                            cfgserverjson = {
                                //-------------------------------------------------INIT
                                channelidwelcome: channelidwelcomearg,
                                prewelcomemention: prewelcomementionarg,
                                welcomemention: welcomementionarg,
                                postwelcomemention: postwelcomementionarg,
                                //-------------------------------------------------GENERAL
                                showwelcomeimage: showwelcomeimagearg,
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
                                //-------------------------------------------------MEMBERCOUNT
                                showmembercount: showmembercountarg,
                                mcountdx: mcountdxarg,
                                mcountdy: mcountdyarg,
                                alignfontmcount: alignfontmcountarg,
                                maxsizexfontmcount: maxsizexfontmcountarg,
                                fontmcount: fontmcountarg,
                                colorfontmcount: colorfontmcountarg,
                            }
                            const jsonStringcfg = JSON.stringify(cfgserverjson);
                            fs.writeFile(`./servers/${guildcfg.id}welcome.json`, jsonStringcfg, err => {
                                if (err) {
                                    console.log(`Error writing welcome config of ${guildcfg.id}(${guildcfg.name})`, err);
                                } else {
                                    console.log(`Successfully wrote welcome config of ${guildcfg.id}(${guildcfg.name})`);
                                }
                            });
                            client.cfgsrvs.set(guildid + "welcome", cfgserverjson);
                            message.channel.send(`Configuration de bienvenue mise à jour !\nVous pouvez consulter votre configuration de bienvenue en tapant \`;welcome read\``);
                        }
                    } catch (err) { console.error(err); }
                }, 2000);
            }
            else if (args[0] == "help" || !args[0]) {
                message.channel.send(`Tape \`;welcome read\` pour lire la config de bienvenue de ton serveur\n
                Tape \`;welcome update channelidwelcome prewelcomemention... etc tous les éléments présentés ci-dessous (ne pas mettre les //---CATEGORIES, c'est juste pour rendre ce message d'aide plus lisible)\`\nn signifie toujours non, ou par défaut\n
                //---------------------------------------------------MESSAGE
                > channelidwelcome = n ou channel : c'est le channel de bienvenue
                > prewelcomemention = n ou texte+a+envoyer+dans+le+channel : texte à envoyer dans le channel (remplacer espaces par +)
                > welcomemention = n pour ne pas envoyer de message, y pour envoyer un message, m pour mentionner l'arrivant
                > postwelcomemention = n ou fin+du+message. C'est la fin du message qui apparaîtra après la mention s'il y en a une.\n
                //-------------------------------------------------BACKGROUNDIMAGE
                > showwelcomeimage = y ou n. Envoyer une carte de bienvenue (c'est une image)
                > backgroundimage = liendelimagedefond.jpg Il s'agit de l'image de fond.
                > xcan = taille en pixels de la largeur de votre image : max 1000px
                > ycan = taille en pixels de la hauteur de votre image : max 1000px\n
                //-------------------------------------------------PROFILEPICT
                > profilepict = y ou n. Afficher ou non la photo de profil de l'arrivant.
                > diameter = diamètre de la photo de profil en pixels.
                > logocenterdx = position horizontale par rapport au côté gauche en pixels de la photo de profil.
                > logocenterdy = position verticale par rapport au côté haut en pixels de la photo de profil.\n
                //-------------------------------------------------USERNAME`);
                message.channel.send(`> profileusername = y ou n. Afficher ou non le pseudo de l'arrivant.
                > userdx = position horizontale par rapport au côté gauche en pixels du pseudo de l'arrivant.
                > userdy = position verticale par rapport au côté haut en pixels du pseudo de l'arrivant.
                > alignfontuser = right ou center ou left. Alignement du texte du pseudo de l'arrivant.
                > maxsizexfontuser = Longueur maximale du pseudo de l'arrivant en pixels.
                > fontuser = police d'écriture du texte du pseudo de l'arrivant.
                > colorfontuser = #ffffff Couleur du texte du pseudo de l'arrivant.\n
                //-------------------------------------------------MEMBERCOUNT
                > showmembercount = y ou n. Afficher ou non le nombre de membres sur le serveur.
                > mcountdx = position horizontale par rapport au côté gauche en pixels du nombre de membres sur le serveur.
                > mcountdy = position verticale par rapport au côté haut en pixels du nombre de membres sur le serveur.
                > alignfontmcount = right ou center ou left. Alignement du texte du nombre de membres sur le serveur.
                > maxsizexfontmcount = Longueur maximale du texte du nombre de membres sur le serveur en pixels.
                > fontmcount = police d'écriture du texte du nombre de membres sur le serveur.
                > colorfontmcount = #ffffff Couleur du texte du texte du nombre de membres sur le serveur.
                `);
                message.channel.send(`
                Voici une commande que vous pouvez copier coller pour modifier plus facilement sans oublier de paramètres : 
                \`;welcome update channelidwelcome prewelcomemention welcomemention postwelcomemention showwelcomeimage backgroundimage xcan ycan profilepict diameter logocenterdx logocenterdy profileusername userdx userdy alignfontuser maxsizexfontuser fontuser colorfontuser showmembercount mcountdx mcountdy alignfontmcount maxsizexfontmcount fontmcount colorfontmcount\`\nVoici la commande pour utiliser le mode par défaut : 
                \`;welcome update channel Bienvenue+à+toi+ m +! y n n n y n n n y n n n n n n y n n n n n n\``)
            }
        }
    }
}
