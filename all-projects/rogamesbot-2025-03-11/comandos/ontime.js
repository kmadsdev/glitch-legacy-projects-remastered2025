const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
   function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, 0)} dias, ${hrs.padStart(2, 0)} horas, ${min.padStart(2, 0)} minutos e ${sec.padStart(2, 0)} segundos!`
  }
    let embed = new Discord.MessageEmbed()
    .setTitle("My online time! 💤")
    .setColor("RANDOM")
    .setDescription(`I waked up since ${duration(bot.uptime)}`)
    .setTimestamp()
    .setFooter(``)
    message.channel.send(embed)
}
exports.help = {
  name: "!ontime"
};