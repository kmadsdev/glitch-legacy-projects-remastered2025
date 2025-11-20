const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
  let mensagem = db.fetch(`mensagem_${user.id}`)
  if (mensagem === null) mensagem = "Sou muito fã do Brunimations! Altere sua frase usando `.mensagem`"
    let lvl = db.fetch(`lvl_${user.id}`)
    let xp = db.fetch(`xp_${user.id}`)
    if (lvl === null) lvl = 0
  if (xp === null) xp = 0
    let embed = new Discord.MessageEmbed()
    .setTitle("Informações do usuário")
    .setColor("GREEN")
    .addField("Nome de usuário", user.tag)
    .addField("ID de usuário", user.id)
    .addField("Quando entrou no Servidor", moment.utc(user.joinedAt).format("LLL"))
    .addField("Quando entrou no Discord", moment.utc(user.createdAt).format("LLL"))
    .addField("Level", lvl)
    .addField("XP", xp)
    .addField("Mensagem", mensagem)
    .setThumbnail(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})) // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    message.channel.send(embed)
}
exports.help = {
  name: ".userinfo"
}
