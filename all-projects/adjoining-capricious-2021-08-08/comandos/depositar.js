const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Quanto dinheiro eu devo depositar em sua conta?")
    let money = await db.fetch(`money_${message.author.id}`)
    let cartão = await db.fetch(`cartão_${message.author.id}`)
    if (args[0] === "tudo") {
      if (!money) return message.reply("Você não tem dinheiro!")
    db.add(`cartão_${message.author.id}`, money)
    db.subtract(`money_${message.author.id}`, money)
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Depositado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> depositou \`F$${money}\` para sua conta do cartão de crédito!`)
    .setTimestamp()
    message.channel.send(embed)
  } else {
    if (money < args[0]) return message.reply("Você não tem o valor informado!")
  if (isNaN(args[0])) return message.reply("O Argumento informado não é um número!")
    db.add(`cartão_${message.author.id}`, args[0])
    db.subtract(`money_${message.author.id}`, args[0])
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Valor Depositado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> depositou \`F$${args[0]}\` para sua conta do cartão de crédito!`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "'depositar"
}