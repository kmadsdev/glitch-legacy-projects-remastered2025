const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  if (!args.join(" ")) return message.reply(":x: | What bug you want report? No jokes alowed.")
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
  .setTitle("Your bug related sucessfully!!")
  .setColor("RANDOM")
  .setDescription(`<@${message.author.id}> Your bug will be analized. You can  earn prizes with it!

Related bug: \`${args.slice(0).join(" ")}\``)
  .setTimestamp()
  message.channel.send(embed)
  let embed2 = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag} (${message.author.id}) Related a "bug"`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setColor("RANDOM")
  .setDescription(`\`${args.slice(0).join(" ")}\``)
  .setTimestamp()
  bot.channels.cache.get("894531874909716481").send(embed2)
}
exports.help = {
  name: "!bug"
};