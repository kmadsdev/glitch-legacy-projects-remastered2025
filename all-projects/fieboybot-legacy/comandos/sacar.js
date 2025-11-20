const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("💳 Quanto você deseja sacar?");

  let money = db.fetch(`money_${message.author.id}`);
  let cartão = db.fetch(`cartão_${message.author.id}`);

  if (args[0] === "tudo") {
    if (!cartão || cartão <= 0) return message.reply("❌ Você não tem saldo no cartão!");

    db.add(`money_${message.author.id}`, cartão);
    db.subtract(`cartão_${message.author.id}`, cartão);
    db.add(`xp_${message.author.id}`, 1);

    let embed = new Discord.MessageEmbed()
      .setTitle("🏧 Saque realizado!")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> sacou **FB$${cartão}** para o saldo em mãos!`)
      .setTimestamp();

    return message.channel.send({ embeds: [embed] });
  }

  if (isNaN(args[0])) return message.reply("❌ O valor informado não é um número!");
  if (cartão < args[0]) return message.reply("💳 Você não tem o valor informado no cartão!");
  if (args[0] <= 0) return message.reply("❌ Não é possível sacar esse valor!");

  db.add(`money_${message.author.id}`, parseInt(args[0]));
  db.subtract(`cartão_${message.author.id}`, parseInt(args[0]));
  db.add(`xp_${message.author.id}`, 1);

  let embed = new Discord.MessageEmbed()
    .setTitle("🏧 Saque realizado!")
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> sacou **FB$${args[0]}** para o saldo em mãos!`)
    .setTimestamp();

  message.channel.send({ embeds: [embed] });
};

exports.help = {
  name: "!sacar"
};
