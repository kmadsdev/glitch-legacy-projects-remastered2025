const Discord = require("discord.js");
const fetch = require("node-fetch");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first();
  let embedC = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Carregando comando!")
    let msgg = await message.channel.send(embedC);
    if (!user) return message.reply(":x: | Você esqueceu de mencionar um usuário para enviar um tapa!")
  db.add(`xp_${message.author.id}`, 1)
    fetch ("https://nekos.life/api/v2/img/slap")
    .then(res => res.json())
    .then (json => {
      let embedisa = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Como você vai se safar após bater em mim? <@694975753418440844> deu um **TAPA** bem dado em <@${message.author.id}>`)
      .setImage(json.url)
      .setFooter("Seu feio >:(")
      if (user.id === "694975753418440844") return message.reply(embedisa)
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> deu um **TAPA** em ${user}`)
      .setImage(json.url)
      .setFooter("")
      msgg.edit(embed)
    })
}
exports.help = {
  name: "!slap"
}