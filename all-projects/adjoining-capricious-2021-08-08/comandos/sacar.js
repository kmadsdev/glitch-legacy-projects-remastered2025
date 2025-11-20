const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Quanto de dinheiro eu devo pegar?")
    let money = await db.fetch(`money_${message.author.id}`)
    let cartão = await db.fetch(`cartão_${message.author.id}`)
    if (args[0] === "tudo") {
      if (!cartão) return message.reply("Você não tem saldo no cartão!")
    db.add(`money_${message.author.id}`, cartão)
    db.subtract(`cartão_${message.author.id}`, cartão)
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Sacado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> sacou \`F$${cartão}\` para seu saldo em mãos!`)
    .setTimestamp()
    message.channel.send(embed)
  } else {
    if (cartão < args[0]) return message.reply("Você não tem o valor informado!")
  if (isNaN(args[0])) return message.reply("O Argumento informado não é um número!")
    db.add(`money_${message.author.id}`, args[0])
    db.subtract(`cartão_${message.author.id}`, args[0])
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Sacado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> sacou \`F$${args[0]}\` para seu saldo em mãos!`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "'sacar"
}