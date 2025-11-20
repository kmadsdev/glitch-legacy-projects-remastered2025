const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first()
  if (!user) return message.reply("Mencione uma pessoa!")
  if (message.author.id == "763398072587386912") {
    if (!args[0]) return message.reply("Diga um argumento (classic, gold, diamond)")
    if (args[0] == "classic") {
      db.add(`classic_${user.id}`, 1)
      message.reply(`${user} agora é premium classic!`)
    }
    if (args[0] == "gold") {
      db.add(`gold_${user.id}`, 1)
      message.reply(`${user} agora é premium gold!`)
    }
    if (args[0] == "diamond") {
      db.add(`diamond_${user.id}`, 1)
      message.reply(`${user} agora é premium diamnond!`)
    }
  }
}
exports.help = {
  name: "'addp"
}