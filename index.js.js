const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
    console. log("le bot a bien ete connecte");
});

bot.login("NDk0OTE2Njg5NTA3NTE2NDQ2.Do6gpg.2rW9HiwUU3mk-WcXNLJ4LStSIlA");