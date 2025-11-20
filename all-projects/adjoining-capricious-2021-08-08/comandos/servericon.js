const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle(`Icone do servidor: ${message.guild.name}`)
  .setColor("RANDOM")
  .setDescription(`Clique [aqui](${message.guild.iconURL({dynamic: true, size: 1024, format: "png"})}) para fazer o download da imagem!`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setImage(message.guild.iconURL({dynamic: true, size: 1024, format: "png"}))
  message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "'servericon"
}