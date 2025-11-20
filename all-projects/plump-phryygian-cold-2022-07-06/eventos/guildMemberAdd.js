const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, member) => {
  
  let vMensagem = db.fetch(`mensagemW_${member.guild.id}`)
    let vCanal = db.fetch(`canalW_${member.guild.id}`)
    if (!vMensagem) return;
  if (!vCanal) return;
  else var mensagem = vMensagem
  let placeholder = mensagem.replace("{user}", `${member.user.tag}`).replace("{guild}", `${member.guild.name}`).replace("{membros}", `${member.guild.memberCount}`).replace("{@user}", `<@${member.user.id}>`)
  bot.channels.cache.get(vCanal).send(placeholder)
}