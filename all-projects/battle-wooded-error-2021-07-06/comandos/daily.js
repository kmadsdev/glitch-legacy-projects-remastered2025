const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms")
exports.run = async (bot, message, args) => {
  let timeout = 86400000 
    let amount = 100
    let daily = await db.fetch(`daily_${message.author.id}`)
    if (daily !== null & timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      message.reply(`Você já coletou sua recompensa diária! Colete novamente em **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
      db.add(`xp_${message.author.id}`, 1)
      db.add(`money_${message.author.id}`, amount)
      db.set(`daily_${message.author.id}`, Date.now())
      let embed = new Discord.MessageEmbed()
      .setTitle("Daily!")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> coletou **F$${amount}** com sucesso! Confira seu Saldo!
Quer mais F$ e ostentar com seus amigos? Compre R$1.000.000 (pode comprar mais que uma vez) [Clique em Mim!](https://robloxlink.tk/robux)`)
      .setTimestamp()
      message.channel.send(embed)
    }
}
exports.help = {
name: "!daily"
}