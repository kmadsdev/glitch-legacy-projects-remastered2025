const Discord = require("discord.js");
const fetch = require("node-fetch");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
        const user = message.mentions.users.first();
      let embedC = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("Carregando comando!")
    let msgg = await message.channel.send(embedC);
      if (!user) return message.channel.send(`:x: | <@${message.author.id}> Quem eu devo enviar o abraço? Você esqueceu de me dizer!`)
  db.add(`xp_${message.author.id}`, 1)
      fetch("https://nekos.life/api/v2/img/hug")
      .then(res => res.json())
      .then(json => {
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}> deu um **ABRAÇO** em ${user}`)
        .setImage(json.url)
        .setFooter("'O Melhor lugar do mundo, vem dentro de um abraço' Jota Quest")
        msgg.edit(embed)
      })
}
exports.help = {
  name: "!abraçar",
}