const { client } = require("../index.js");
const Canvas = require('canvas');
const logger = require("./logger.js");
const Discord = require('discord.js');
const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
    // Send a welcome image when a new member join
    welcome: async function (member) {
        guildwcfg = member.guild;
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
            //logger.all(channelidwelcome);
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


        } catch (err) { logger.all('------------------------ERROR WELCOMING-----------------------'); console.error(err); logger.all(`----------------${guildwid}------------------`); }
    },
    // Send a boost image when a new member join
    boost: async function (member) {
        guildwcfg = member.guild;
        guildwid = guildwcfg.id;
        confboostserv = client.cfgsrvs.get(guildwid + "boost")
        if (!confboostserv) {
            //-------------------------------------------------STOP
            channelidboost = 'n';
        } else {
            //-------------------------------------------------INIT
            channelidboost = confboostserv.channelidboost;
            preboostmention = confboostserv.preboostmention;
            boostmention = confboostserv.boostmention;
            postboostmention = confboostserv.postboostmention;
            //-------------------------------------------------GENERAL
            showboostimage = confboostserv.showboostimage;
            backgroundimage = confboostserv.backgroundimage;
            xcan = confboostserv.xcan;
            ycan = confboostserv.ycan;
            //-------------------------------------------------PROFILEPICT
            profilepict = confboostserv.profilepict;
            diameter = confboostserv.diameter;
            logocenterdx = confboostserv.logocenterdx;
            logocenterdy = confboostserv.logocenterdy;
            //-------------------------------------------------USERNAME
            profileusername = confboostserv.profileusername
            userdx = confboostserv.userdx;
            userdy = confboostserv.userdy;
            alignfontuser = confboostserv.alignfontuser;
            maxsizexfontuser = confboostserv.maxsizexfontuser;
            fontuser = confboostserv.fontuser;
            colorfontuser = confboostserv.colorfontuser;
        }
        try {
            numbernewmember = member.guild.memberCount;
            //logger.all(channelidboost);
            if (channelidboost == "n") { return } //------------------------------------------------boost ?
            if (showboostimage == "y") {
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

                if (profilepict == "y") {//-------------------------LOGO MEMBER
                    ctx.beginPath();
                    ctx.arc(logocenterdx, logocenterdy, diameter / 2, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.clip();

                    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
                    ctx.drawImage(avatar, logocenterdx - diameter / 2, logocenterdy - diameter / 2, diameter, diameter);
                }

                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'boostimg.jpg');
                if (boostmention == "m") { client.channels.cache.get(channelidboost).send(`${preboostmention}${member}${postboostmention}`, attachment); }
                if (boostmention == "y") { client.channels.cache.get(channelidboost).send(`${preboostmention}${postboostmention}`, attachment); }
                if (boostmention == "n") { client.channels.cache.get(channelidboost).send(attachment); }
            } else {
                if (boostmention == "m") { client.channels.cache.get(channelidboost).send(`${preboostmention}${member}${postboostmention}`); }
                if (boostmention == "y") { client.channels.cache.get(channelidboost).send(`${preboostmention}${postboostmention}`); }
            }


        } catch (err) { logger.all('------------------------ERROR BOOSTING-----------------------'); console.error(err); logger.all(`----------------${guildwid}------------------`); }
    }
}