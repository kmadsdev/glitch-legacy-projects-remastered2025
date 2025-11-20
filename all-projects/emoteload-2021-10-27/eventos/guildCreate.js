const Discord = require("discord.js");
const moment = require("moment")
exports.run =  (bot, guild) => {
  let canal = bot.channels.cache.get("847522283991334922")
  let embed = new Discord.MessageEmbed()
  .setTitle("Entrei em um novo servidor!")
  .setColor("#2a9c0e")
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
  canal.send(embed).then(msg => msg.react(""))
  guild.owner.send(``).then(msg => msg.react(""))

}