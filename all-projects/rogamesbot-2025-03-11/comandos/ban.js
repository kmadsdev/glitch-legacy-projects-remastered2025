const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
         if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":x: | You need permission `Ban Members` to execute this command!");
    let reason = args.slice(1).join(" ") || "Not informed"
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(":x: | I need permission `Ban Members` to execute this command!")
    const user = message.mentions.users.first();
    if (!user) return message.reply(":x: | Mention a user lol")
    if (user.id === bot.id) return message.reply(":x: | You want ban me? Why?");
    if (user.id === message.author.id) return message.reply(":x: | Wait what? You want ban yourself?")
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .ban({
          reason: `Banned by ${message.author.tag} - Reason: ${reason}`
        })
        .then(() => {
          message.reply(`:white_check_mark: | The user ${user.tag} are **BANNED** sucessfully, nobody walked breaking the rules gotcha!`);
          db.add(`xp_${message.author.id}`, 1)
        })
        .catch(err => {
          message.reply(`:x: | I Cant ban this user, error: \`*${err}*\``);
          console.log(err);
        });
      } else {
        message.reply(":x: | This user don't are in this server");
      }
    } else {
      message.reply(":x: | Mention user to i ban him");
    }
}
exports.help = {
  name: "!ban"
};