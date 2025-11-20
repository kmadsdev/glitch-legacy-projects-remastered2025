const Discord = require("discord.js");
exports.run = (bot) => {
  console.log(`${bot.user.username} Iniciou!`)
  let activities = ["💎 Meu criador Vortex#0666", "oioi", "❓ Meu prefixo é ' , meu comando de ajuda é 'ajuda", `Bot em desenvolvimento`, "Tudo bem? Eu tenho vários comandos! Digite 'ajuda e veja todos eles :)'", `💻 Estou cuidando de ${bot.guilds.cache.size} Servidores! Tomando conta de: ${bot.channels.cache.size} Canais e ${bot.users.cache.size} Usuários!`, "🎨 Procuramos designer´s pra logo de servidores e para nosso bot! Entre em contato com Vortex2#0666 para informações!  (pago)", "❗ Encontrou Bugs? use o comando 'bug ou reporte para Vortex#0666! você pode ganhar recompensa em R$ !", "🤵 Quem me criou foi Vortex2#0666", "📰 Em breve teremos um site!", "🐦 eu to vendo video no yt man para de me irritar kakkak", "🌺 Lembrando que estou na fase BETA. Alguns comandos n podem estar funcionando!"], i = 0;
  setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 20000)
  bot.user.setStatus("online")
}
