const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(":x: | Você precisa da permissão `Gerenciar Canais` para executar esse comando!")
    var time = message.content.split(" ").slice(1).join(" ")
    if(isNaN(time)) return message.reply(":x: | O Argumento informado não é um número! (coloque o tempo em segundos!)")
    if(!time) return message.reply(":x: | Me informe um tempo em segundos para setar o slowmode!")
  db.add(`xp_${message.author.id}`, 1)
    message.channel.setRateLimitPerUser(time)
    message.reply(":white_check_mark: | SlowMode setado com sucesso! Confira as configurações do canal!")
}
exports.help = {
 name: "!slowmode"
}