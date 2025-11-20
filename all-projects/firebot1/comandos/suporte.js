const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Servidor de Suporte")
  .setColor("RANDOM")
  .setDescription(`Precisa de ajuda? Entre agora no nosso **Servidor de Suporte!**
Servidor de Suporte oficial em Português: [Clique aqui para carregar o link do servidor!](https://discord.gg/rnXbxuy)`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!suporte"
}