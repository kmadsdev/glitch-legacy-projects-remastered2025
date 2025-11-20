const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle("Fui criada por causa deles(as) :clap: :clap:")
  .setColor("RANDOM")
  .setDescription(`Criador Geral: Vortex2

Sub-Criador: \`.\`

Conselheiros: \`!.\`

Caçadores(as) de bugs: \`b\``)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
}
exports.help = {
  name: "'créditos"
}