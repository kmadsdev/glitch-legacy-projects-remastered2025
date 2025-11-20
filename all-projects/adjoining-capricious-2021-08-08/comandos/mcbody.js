const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Digite um nick válido do Minecraft!")
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Skin de ${args[0]}`)
  .setColor("RANDOM")
  .setDescription(`Aperte [aqui](https://mc-heads.net/download/${args[0]}) para fazer o download!`)
  .setImage(`https://mc-heads.net/body/${args[0]}`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
}
exports.help = {
  name: "'mcbody"
}