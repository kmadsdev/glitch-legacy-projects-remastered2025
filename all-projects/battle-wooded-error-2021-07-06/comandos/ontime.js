const Discord = require("discord.js");
const db = require("quick.db")
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
    .setTitle("Meu tempo Online! 💤")
    .setColor("RANDOM")
    .setDescription(`Eu estou acordado desde ${duration(bot.uptime)}`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
}
exports.help = {
  name: "!ontime"
}