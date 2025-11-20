const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Estatísticas da Bot!")
    .setColor("RANDOM")
    .setDescription("Veja Abaixo!")
    .addFields(
{name: "🖥 Servidores", value: `Eu estou em **${bot.guilds.cache.size}** Servidores`},
    {name: "💻 Canais", value: `Eu estou vendo **${bot.channels.cache.size}** Canais`},
    {name: "👥 Usuários", value: `Observando , **${bot.users.cache.size}** Membros Incríveis!`})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!status"
}