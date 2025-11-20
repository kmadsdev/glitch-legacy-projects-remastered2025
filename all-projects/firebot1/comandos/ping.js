const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Carregando Comando...");
  db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Pong! :ping_pong:")
    .setColor("RANDOM")
    .setDescription(`Veja o meu tempo de resposta!`)
    .addFields(
      {name: "<:bot:1360232899642921012> Latência", value: `__**${m.createdTimestamp - message.createdTimestamp} MS**__`}
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    m.edit(embed)
}
exports.help = {
  name: "!ping"
}