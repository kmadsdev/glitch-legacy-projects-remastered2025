const Discord = require("discord.js");
const moment = require("moment");
exports.run = (bot, guild) => {
  let canal = bot.channels.cache.get("707051386700955648")
   let embed = new Discord.MessageEmbed()
  .setTitle("Infelizmente, deixei um servidor...")
  .setColor("#FF0000")
  .addFields(
  {name: "Nome do Servidor", value: `\`${guild.name}\``},
  {name: "Proprietário", value: `\`${guild.owner.user.tag}\``},
    {name: "Id do Proprietário", value: `\`${guild.owner.user.id}\``},
    {name: "Região", value: `\`${guild.region}\``},
  {name: "Quantidade de Membros", value: `\`${guild.memberCount}\``},
  {name: "Criado em ", value: `\`${moment.utc(guild.createdAt).format("LLL")}\``},
  )
  .setImage(guild.iconURL({dynamic: true, size: 1024, format: "png"})) // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
  .setTimestamp()
  canal.send(embed)
}