const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
   let timeout = 259200000
    let rp = db.fetch(`rp_${message.author.id}`)
    if (rp !== null && timeout - (Date.now() - rp) > 0) {
      let time = ms(timeout - (Date.now() - rp));
      message.reply(`Você já coletou sua recompensa PREMIUM, colete novamente em **${time.days}d ${time.hours}h ${time.minutes}m e ${time.seconds}s**`)
    } else {
      let premium = db.fetch(`diamond_${message.author.id}`)
      let embedErro = new Discord.MessageEmbed()
      .setTitle("Erro!")
        .setColor("#FF0000")
       .setDescription(`<@${message.author.id}>, Você não é um assinante PREMIUM! para ter todos os benefícios, veja o nosso PATREON! [Clicando Aqui!]()`)
      if (premium < 1) return message.reply(embedErro)
      db.set(`rp_${message.author.id}`, Date.now())
      db.add(`xp_${message.author.id}`, 1)
      let embed = new Discord.MessageEmbed()
      .setTitle("Recompença Premium Coletada!")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> coletou **F$ 5,000** por causa da sua assinatura PREMIUM`)
      .setTimestamp()
      message.channel.send(embed)
      db.add(`money_${message.author.id}`, 5000)
    }
}
exports.help = {
  name: "'recompensa-premium"
}