const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) =>  {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você precisa da permissão `Gerenciar Servidor` para executar esse comando!")
  message.delete()
  if (!args.join(" ")) return message.reply(":x: | Você esqueceu de dizer o que eu vou dizer!")
  if (args[0] == "embed") {
    if (!args.slice(1).join(" ")) return message.reply(":x: | Você esqueceu de dizer o que eu vou dizer!")
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag} disse:`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    .setColor("RANDOM")
    .setDescription(`${args.slice(1).join(" ")}`)
    .setTimestamp()
    message.channel.send(embed)
  } else {
    message.channel.send(`<@${message.author.id}> Disse: ${args.slice(0).join(" ")}`)
  }
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!say"
}