const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
  let empresa = db.fetch(`empresa_${message.author.id}`)
  if (empresa < 1) return message.reply("Você precisa de uma empresa para executar esse comando!")
  let timeout = 43200000 
  let trabalhar = await db.fetch(`trabalhar_${message.author.id}`)
  if (trabalhar !== null & timeout - (Date.now() - trabalhar) > 0) {
    let time = ms(timeout - (Date.now() - trabalhar));
    message.reply(`Você está cansado, espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando!`)
  } else {
    db.set(`trabalhar_${message.author.id}`, Date.now())
    db.add(`money_${message.author.id}`, 1000)
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Trabalho!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> coletou **F$ 1,000** trabalhando e coletando com sua empresa!`)
    .setTimestamp()
    message.channel.send(embed)
  }
}
exports.help = {
  name: "i!trabalhar"
}