const Discord = require("discord.js");
exports.run = (bot) => {
  console.log(`${bot.user.username} Iniciou!`)
  let activities = [
    "💎 Meu criador fire",
    "❓ Meu prefixo é !", 
    "meu comando de ajuda é !ajuda", 
    `Bot em desenvolvimento`, 
    `${bot.users.cache.size} Usuários!`,
    `💻 Estou cuidando de ${bot.guilds.cache.size} Servidores!`,
    "Tomando conta de: ${bot.channels.cache.size} Canais",
    ], i = 0;
  setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 20000)
  bot.user.setStatus("online")
}
