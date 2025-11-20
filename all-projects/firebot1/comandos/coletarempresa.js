const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.help = async (bot, message, args) => {
  let checkEmpresa = db.fetch(`empresa_${message.author.id}`)
    if (checkEmpresa < 1) return message.reply("Você precisa de uma empresa para executar esse comando!")
    let site = db.fetch(`site_${message.author.id}`)
    let timeout = 2592000000 
    let coletarEmpresa = db.fetch(`coletarEmpresa_${message.author.id}`)
    if (coletarEmpresa !== null && timeout - (Date.now() - coletarEmpresa) > 0) {
      let time = ms(timeout - (Date.now() - coletarEmpresa));
      message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para coletar sua recompensa de empresa!`)
    } else { 
  db.add(`xp_${message.author.id}`, 1)
      db.add(`cartão_${message.author.id}`, 40000)
      let embed = new Discord.MessageEmbed()
      .setTitle("Recompença da Empresa")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> recebeu **F$ 40,000** volte aqui nos próximos **30 dias** para coletar novamente!`)
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
      message.channel.send(embed)
}
}
exports.help = { 
  name: "!coletar-empresa"
}