const Discord = require("discord.js");
exports.run = (bot) => {

  console.log(`[${bot.user.username}]: Eu Iniciei.`)

  let activities = [
  `👥 Vendo  ${bot.users.cache.size} Membros Incríveis!`, 
  `💻 Estou analizando ${bot.guilds.cache.size} Servidores`, 
  "Use hk.ajuda para ver meus comandos", 
  "Fui feito pelo FIRE BOY#0001"
], i = 0;

  setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 20000)
  bot.user.setStatus("online")
//quando for ${} use `` ao invés de "" || ${bot.guilds.cache.size} (Servidores) ${bot.members.cache.size} (Membros)
// -
//você pode mudar o status do bot colocando "offline" para offline, "dnd" para não perturbe, e "Idle" para ausente.
// -
//as atividades de seu bot, "PLAYING" = jogando, "LISTENING" = ouvindo, "STREAMING" = ao vivo, "WATCHING" = assistindo.
}