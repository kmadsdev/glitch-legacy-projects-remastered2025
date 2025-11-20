const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
     let user = bot.users.cache.get(args[0]) || message.mentions.users.first()
    if (!args[1]) return message.reply("Quanto de pagamento eu devo enviar?")
  if (user.id === message.author.id) return message.reply("Você não pode enviar um pagamento para si!")
    if (isNaN(args[1])) return message.reply("O Argumento informado não é um número!")
    let money = await db.fetch(`money_${message.author.id}`)
    if (money < args[1]) return message.reply("Você não tem o valor informado!")
    if (!user) return message.reply("Pra quem eu devo enviar o pagamento?")
  if (args[1] <= 1) return message.reply("Você não pode enviar apenas F$ 1!")
  if (args[1] >= 100) {
    var taxa1 = args[1] - 20
    message.channel.send(`Você está prestes a dar **F$ ${args[1]}** para ${user}
Ele irá receber **F$ ${taxa1}** (Taxa de F$ 20)
Aperte em '✅' para confirmar!`).then(msg => {
      msg.react("✅")
      let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1, time: 15000})
      coletor.on("collect", () => {
        db.add(`xp_${message.author.id}`, 1)
        db.add(`money_${user.id}`, taxa1)
        db.subtract(`money_${message.author.id}`, args[1])
        msg.edit(`${user} recebeu **F$${taxa1}** de <@${message.author.id}>`)
      })
    })
  } else {
    var taxaP = args[1] - 1
        message.channel.send(`Você está prestes a dar **F$ ${args[1]}** para ${user}
Ele irá receber **F$ ${taxaP}** (Taxa de 1%)
Aperte em '✅' para confirmar!`).then(msg => {
      msg.react("✅")
      let filtro = (reaction, usuario) => reaction.emoji.name === "✔" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, {max: 1, time: 15000})
      coletor.on("collect", () => {
        db.add(`xp_${message.author.id}`, 1)
        db.add(`money_${user.id}`, taxaP)
        db.subtract(`money_${message.author.id}`, args[1])
        msg.edit(`${user} recebeu **F$${taxaP}** de <@${message.author.id}>`)
      })
    })
  }

}
exports.help = {
  name: "'pay"
}