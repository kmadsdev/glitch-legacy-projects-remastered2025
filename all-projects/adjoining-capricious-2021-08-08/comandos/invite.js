const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, argss) => {
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
      .setTitle("Meu convite para o servidor!")
      .setColor("RANDOM")
      .setDescription(`Aqui não tem nada :)|

Muito obrigado por executar o comando kkk!`)
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
      message.channel.send(embed)
}
exports.help = {
  name: "'invite"
}