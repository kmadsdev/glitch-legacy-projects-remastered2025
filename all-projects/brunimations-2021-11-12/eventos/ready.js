const Discord = require("discord.js");
exports.run = (bot) => {

console.log(`[${bot.user.tag}]: Eu acordei!`)
console.log(`[${bot.user.tag}]: Bora trabalhar?`)

  let activities = [
  `Lives do brunin com ${bot.users.cache.size} Membros`,
  "Use .ajuda para ver minha lista de comandos",
  "Isncreva-se no canal do brunimations! https://youtube.com/c/Brunimations"
  
], i = 0;

  setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 20000)
  bot.user.setStatus("online")
//quando for ${} use `` ao invés de "" || ${bot.guilds.cache.size} (Servidores) ${bot.members.cache.size} (Membros)
// -
//você pode mudar o status do bot colocando "offline" para offline, "dnd" para não perturbe, e "Idle" para ausente.
// -
//as atividades de seu bot, "PLAYING" = jogando, "LISTENING" = ouvindo, "STREAMING" = ao vivo, "WATCHING" = assistindo.
}


