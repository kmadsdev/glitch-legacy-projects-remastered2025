const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  let servidor = bot.guilds.cache.get(args[0]) || message.guild;
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Informações do Servidor: ${servidor.name}`)
  .setThumbnail(servidor.iconURL({dynamic: true, size: 1024, format: "png"}))
  .addFields(
{name: "Nome do Servidor", value: `\`${servidor.name}\``},
    {name: "ID Do Servidor", value: `\`${servidor.id}\``},
    {name: "Dono do Servidor", value: `\`${servidor.owner.user.tag}\``},
    {name: "Quantidade de Membros", value: `\`${servidor.memberCount}\``},
    {name: "Criado em", value: `\`${moment.utc(servidor.createdAt).format("LLL")}\``},
  )
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
  }
exports.help = {
  name: "!serverinfo"
};