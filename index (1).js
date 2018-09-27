const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console. log("le bot a bien ete connecte");
});

bot.login("5T9hwWMyE2BfJUa0o_KCdMT-UKSg6hes");