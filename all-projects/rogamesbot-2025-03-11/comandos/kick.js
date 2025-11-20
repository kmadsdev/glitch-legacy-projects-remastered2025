const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: | Você precisa da permissão `Expulsar Membros` para executar esse comando!");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(":x: | Eu preciso da permissão `Expulsar Membros` para executar esse comando!");
    const user = message.mentions.users.first();
    if (user.id === "694975753418440844") return message.reply(":x: | Algo deu errado... :~)");
    if (user.id === message.author.id) return message.reply(":x: | Calma lá né? você quer se expulsar?")
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .kick
        .then(() => {
          message.reply(`:white_check_mark: | The user ${user.tag} has **KICKED** sucessfully!`)
          db.add(`xp_${message.author.id}`, 1)
        })
        .catch(err => {
          message.reply(`:x: | I can't ban this user... Illuminatis? Error: \`${err}\``)
          console.log(err);
        });
      } else {
        message.reply(":x: | This user is no longer in this server, rage quit?")
      }
    } else {
      message.reply(":x: | Mention a user to ban, i cant use IDs")
    }
}
exports.help = {
  name: "!kick"
};
