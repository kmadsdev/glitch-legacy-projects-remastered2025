const Discord = require("discord.js");
const fetch = require("node-fetch");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
      const user = message.mentions.users.first();
    if (!user) return message.reply(":x: | Você esqueceu de mencionar um usuário para enviar um beijo!");
    if (user.id === "694975753418440844") return message.reply(":x: | Você não pode beijar em mim, mas eu aceito você como amigo =)");
    let embedC = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Carregando comando!")
    let msgg = await message.channel.send(embedC);
  db.add(`xp_${message.author.id}`, 1)
    fetch ("https://nekos.life/api/v2/img/kiss")
    .then(res => res.json())
    .then(json => {
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> deu um **BEIJO** em ${user}`)
      .setImage(json.url)
      .setFooter("Fofuraaaaaaaaa")
      msgg.edit(embed)
    })
}
exports.help = {
  name: "!kiss"
}