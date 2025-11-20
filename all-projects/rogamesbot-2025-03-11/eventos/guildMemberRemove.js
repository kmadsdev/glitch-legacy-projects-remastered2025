const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, member) => {
let vMensagem = db.fetch(`mensagemL_${member.guild.id}`)
    let vCanal = db.fetch(`canalL_${member.guild.id}`)
    if (!vMensagem) return;
   else var mensagem = vMensagem
   let placeholder2 = mensagem.replace("{user}", `${member.user.tag}`).replace("{@user}", `<@${member.id}>`).replace("{guild}", `${member.guild.name}`).replace("{membros}", `${member.guild.memberCount}`)
  bot.channels.cache.get(vCanal).send(placeholder2)
} // user, guild, e membros