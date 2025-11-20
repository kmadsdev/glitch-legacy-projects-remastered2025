const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: | Você precisa da permissão `Gerenciar Mensagens` para executar esse comando!")
    const amount = args.join(" ");
    
    if (!amount) return message.reply(":x: | Você não informou quantas mensagens devo apagar");
    if (isNaN(amount)) return message.reply(":x: | O parâmetro informado não é um número!");
    
    if (amount > 100) return message.reply(":x: | Eu só posso apagar 100 Mensagens");
    if (amount < 1) return message.reply(":x: | Apague mais mensagens :~)");
    
    message.delete()

  db.add(`xp_${message.author.id}`, 1)
    
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
      message.channel.bulkDelete(messages
    )})
}
exports.help = {
  name: ".clear"
}