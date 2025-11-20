const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (!args.join(" ")) return message.reply(":x: | Você esqueceu de relatar um bug para nossa equipe!")
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
  .setTitle("Seu bug foi relatado com sucesso!")
  .setColor("RANDOM")
  .setDescription(`<@${message.author.id}> seu bug foi relatado! ele será analisado pela nossa equipe de desenvolvimento, e depedendo do erro, você poderá ganhar recompensas!

espero que você não tenha usado o comando de mal jeito, você pode perder R$ ou poderá entrar na BlackList do bot e não poderá usar os comandos!

Bug relatado: \`${args.slice(0).join(" ")}\``)
  .setTimestamp()
  message.channel.send(embed)
  let embed2 = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag} (${message.author.id}) diz ter relatado um bug...`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setColor("RANDOM")
  .setDescription(`\`${args.slice(0).join(" ")}\``)
  .setTimestamp()
  bot.channels.cache.get("859633346169929801").send(embed2)
}
exports.help = {
  name: "!bug"
}
