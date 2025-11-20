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
    {name: "<:bot:538163542260580352> Latência", value: `__**${m.createdTimestamp - message.createdTimestamp} MS**__`},
    {name: "<a:cd:651503387015381002> Latência da API", value: `__**${Math.round(bot.ws.ping)} MS**__`},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    m.edit(embed)
}
exports.help = {
  name: "'ping"
}