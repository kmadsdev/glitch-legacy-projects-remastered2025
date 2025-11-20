const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms")
exports.run = async (bot, message, args) => {
  let checkEmpresa = db.fetch(`empresa_${message.author.id}`)
    if (checkEmpresa < 1) return message.reply("Você precisa de uma empresa pra executar esse comando!")
    let timeout = 43200000 
    let anunciar = db.fetch(`anuncar_${message.author.id}`)
    if (anunciar !== null && timeout - (Date.now() - anunciar) > 0) {
      let time = ms(timeout - (Date.now() - anunciar));
      message.reply(`Espere **${time.hours}h ${time.minutes}m e ${time.seconds}s** para co`)
    } else {
      db.add(`xp_${message.author.id}`, 1)
      db.add(`cartão_${message.author.id}`, 2000)
      let embed = new Discord.MessageEmbed()
      .setTitle("Recompença de Empresa")
      .setColor("RANDOM")
      .setDescription(`<@${message.author.id}> recebeu **R$ 2,000** volte aqui nas próximas **12 horas** para coletar novamente!`)
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
      message.channel.send(embed)
   
}
}
exports.help = {
  name: "!anunciar"
}