  const Discord = require("discord.js");
  const db = require("quick.db");
  exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
    let Cargo = db.fetch(`cargo_${message.guild.id}`)
    let mCargo = message.mentions.roles.first()
    if (!mCargo) return message.reply("Você esqueceu de mencionar um cargo para setar o autorole!")
    db.set(`cargo_${message.guild.id}`, mCargo.id)
    db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
  .setColor("RANDOM")
  .setDescription(`<@${message.author.id}> ativou o módulo **AutoRole!** | Quando um usuário entrar, ele vai receber o cargo ${mCargo} !`)
  message.channel.send(embed)
  }
  exports.help = {
    name: "'setautorole"
  }