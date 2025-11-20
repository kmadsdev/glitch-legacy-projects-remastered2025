const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.help = {
  name: "'juntar"
}
exports.run = async (bot, message, args) => {
  let timeout = 86400000
  let juntar = await db.fetch(`juntar_${message.author.id}`)
  if (juntar !==  null & timeout - (Date.now() - juntar) > 0) {
    let time = ms(timeout - (Date.now() - juntar));
    message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
  } else {
  if (!args[0]) return message.reply("Digite o nome do emprego!")
  if (args[0] === "entregador-de-pizza") {
    db.add(`pizza_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é entregador de pizza!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'entregar`")
    .setTimestamp()
    message.channel.sned(embed)
  }
  if (args[0] === "gari") {
    db.add(`gari_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é gari!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'coletar`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "frentista") {
    db.add(`frentista_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é frentista!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'abastecer`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "moto-taxi") {
    db.add(`moto-taxi_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é moto-taxi`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'dirigir`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "fazendeiro") {
    db.add(`fazendeiro_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é fazendeiro!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'plantar`")
    .setTimestamp()
    message.channel.send(embed)
}
  if (args[0] === "policial") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 15) return message.reply("Você precisa ter nível **15** para executar esse comando!")
    db.add(`policial_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é policial!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'patrulhar`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "carteiro") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 10) return message.reply("Você precisa ter nível **10** para executar esse comando!")
    db.add(`carteiro_${message.author.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é carteiro!`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'mercadoria`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "barman") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 5) return message.reply("Você precisa ter nível **5** para executar esse comando!")
    db.add(`barman_${message.author.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é barman`)
    .addField("Com isso, ele desbloqueou alguns comandos", "`'vender`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "medico") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 25) return message.reply("Você precisa ter nível **25** para executar esse comando!")
    db.add(`médico_${message.author.id}`)
    let embed = new Discord.MessageEmbed
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é médico`)
    .addField("Com isso, ele desbloqueou alguns comandos!", "`'consultar`")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (args[0] === "advogado") {
    let level = db.fetch(`lvl_${message.author.id}`)
    if (level < 20) return message.reply("Você precisa ter nível **20** para executar esse comando!")
    db.add(`advogado_${message.author.id}`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Contratado!")
    .setColor("RANDOM")
    .setDescription(`${message.author} agora é advogado`)
    .addField("Com isso, ele desbloqueou alguns comandos!", "`'prender`")
    .setTimestamp()
    message.channel.send(embed)
  }
  db.set(`juntar_${message.author.id}`, Date.now())
  }
}