const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Carregando Comando...");
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Pong! :ping_pong:")
    .setColor("RANDOM")
    .setDescription(`Veja o meu tempo de resposta!`)
    .addFields(
    {name: "Latency", value: `__**${m.createdTimestamp - message.createdTimestamp} MS**__`},
    {name: "API Latency", value: `__**${Math.round(bot.ws.ping)} MS**__`},
    )
    .setTimestamp()
    .setFooter(``)
    m.edit(embed)
}
exports.help = {
  name: "!ping"
};