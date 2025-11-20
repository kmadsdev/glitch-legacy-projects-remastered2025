const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Estatísticas da Bot!")
    .setColor("RANDOM")
    .setDescription("Veja Abaixo!")
    .addFields(
{name: ":zzz: Acordei", value: `EEu acordei faz <Counter> Semanas <Counter> Dias <Counter> Horas e <Counter> Minutos!`},
    {name: ":computer: Canais", value: `Eu estou fiscalizando **${bot.channels.cache.size}** Canais`},
    {name: ":man::woman: Usuários", value: `Fiscalizando também, **${bot.users.cache.size}** Usuários!`})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "'status"
}