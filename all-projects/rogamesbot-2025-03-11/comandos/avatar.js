const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
    if (!message.mentions.users.size) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Your Avatar")
      .setDescription(`To Download this image [Click Here](${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})`)
      .setColor("RANDOM")
      .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
      message.channel.send(embed)
    }
    const avatarList = message.mentions.users.map(user => {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Avatar de ${user.username}`)
      .setDescription(`To Download this image [Click Here](${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})`)
      .setColor("RANDOM")
      .setImage(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
      return message.channel.send(embed)
    })
    }
exports.help = {
  name: "!avatar"
};