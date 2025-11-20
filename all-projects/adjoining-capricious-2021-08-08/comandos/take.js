const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let autorizado = message.author.id == 763398072587386912
  if (!autorizado) return message.reply("Esse comando só pode ser utilizado por pessoas autorizadas!")
  if (autorizado) {
    if (!args[0]) return message.reply("Quanto de dinheiro eu devo retirar?")
    if (isNaN(args[0])) return message.reply('O Argumento informado não é um número!')
    let user = message.mentions.users.first() || message.author;
    db.subtract(`money_${user.id}`, args[0])
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag} Perdeu Saldo!`, `${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    .setColor("RANDOM")
    .setDescription(`${user} perdeu \`F$${args[0]}\` solicitado por <@${message.author.id}>`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "'take"
}