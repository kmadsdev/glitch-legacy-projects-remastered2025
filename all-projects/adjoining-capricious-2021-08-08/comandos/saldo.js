const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let user = bot.users.cache.get(args[0]) || message.mentions.users.first() || message.author;
    let money = await db.fetch(`money_${user.id}`)
    if (money === null) money = 0;
     let cartão = await db.fetch(`cartão_${user.id}`)
     if (cartão === null) cartão = 0;
    db.add(`xp_${message.author.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle("Saldo")
    .setAuthor(`${user.username}`, `${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`) // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setColor("RANDOM")
    .setDescription(`O Saldo de ${user}

:dollar: Saldo em Mãos: \`R${money}\`

:credit_card: Saldo no Cartão: \`R${cartão}\``)
    .setTimestamp()
    message.channel.send(embed)
  }
exports.help = {
  name: "'saldo"
}