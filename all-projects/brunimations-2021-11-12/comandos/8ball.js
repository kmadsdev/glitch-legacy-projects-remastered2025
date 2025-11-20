const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 2)
  if (!args.join(" ")) return message.reply("")
  let frases = [
  // ↓ - - - - - - - - - - - - - - - - - - - - ↓ frases ↓ - - - - - - - - - - - - - - - - - - - - ↓
  'Não', 'Sim', 'Não entendi, pergunte novamente', 'Não me perunte isso agora!', 'Claro', 'Talvés'
  // ↑ - - - - - - - - - - - - - - - - - - - - ↑ frases ↑ - - - - - - - - - - - - - - - - - - - - ↑
]
let pick = frases[Math.floor(Math.random() * 3)]
message.channel.send(pick)
    
}
exports.help = {
    name: ".8ball"
}
