const Discord = require("discord.js");
exports.run = (bot) => {

let frase1 = "Já acordei!"
let frase2 = "Bora trabalhar?"
console.log(`[${bot.user.tag}]: Eu acordei!`)
console.log(`[${bot.user.tag}]: Bora trabalhar?`)

  let activities = [
  "Use !help to see my commands",
  `👥 Seeing ${bot.users.cache.size} Amazing Members`,
  "🏆 Join FIRE BOY TEAM Today! https://robloxlink.tk/group",
  "🐦 Follow RoGames Oficial on twitter! @oficialrbxgames",
  "⭐ Watching this amazing channel https://youtube.fireboy.ml/" 
], i = 0;

  setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 20000)
  bot.user.setStatus("online")
//quando for ${} use `` ao invés de "" || ${bot.guilds.cache.size} (Servidores) ${bot.members.cache.size} (Membros)
// -
//você pode mudar o status do bot colocando "offline" para offline, "dnd" para não perturbe, e "Idle" para ausente.
// -
//as atividades de seu bot, "PLAYING" = jogando, "LISTENING" = ouvindo, "STREAMING" = ao vivo, "WATCHING" = assistindo.
}







