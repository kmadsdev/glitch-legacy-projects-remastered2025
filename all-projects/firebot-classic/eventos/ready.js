const Discord = require("discord.js");
exports.run = (bot) => {

let frase1 = "Já acordei!"
let frase2 = "Bora trabalhar?"
console.log(`[${bot.user.tag}]: Eu acordei!`)
console.log(`[${bot.user.tag}]: Bora trabalhar?`)

  let activities = [
  "Use !ajuda para ver meus comandos",
  `👥 Vendo ${bot.users.cache.size} Membros Incríveis`, 
  "Use !bug (bug) para relatar um bug e ganhar até FB$10,000",
  `🖥 Estou em ${bot.guilds.cache.size} Servidores`,
  `💻 Vendo ${bot.channels.cache.size} canais de voz e texto`,
  "Leia meu sobre-mim para mais informações",
  "🚀 Siga o FIRE BOY no Twitter! @fireboyofc"
], i = 0;

  setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 20000)
  bot.user.setStatus("online")
//quando for ${} use `` ao invés de "" || ${bot.guilds.cache.size} (Servidores) ${bot.members.cache.size} (Membros)
// -
//você pode mudar o status do bot colocando "offline" para offline, "dnd" para não perturbe, e "Idle" para ausente.
// -
//as atividades de seu bot, "PLAYING" = jogando, "LISTENING" = ouvindo, "STREAMING" = ao vivo, "WATCHING" = assistindo.
}

