const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");


exports.run = async (bot, message, args) => {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: | You need perm to execute this commands.")
    const amount = args.join(" ");
    
    if (!amount) return message.reply(":x: | Not a valid number.");
    if (isNaN(amount)) return message.reply(":x: | What is this? This is a number?");
    
    if (amount > 100) return message.reply(":x: | I can delete only 100 messages");
    if (amount < 1) return message.reply(":x: | delete more than 1 messages duhh");
    
    message.delete()

  db.add(`xp_${message.author.id}`, 1)
    
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
      message.channel.bulkDelete(messages
    )})
}
exports.help = {
  name: "!clear"
};
