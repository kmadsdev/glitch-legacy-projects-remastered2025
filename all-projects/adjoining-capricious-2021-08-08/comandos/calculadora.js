const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
  //if (cartão === null) cartão = 0;
  let embedE = new Discord.MessageEmbed()
  .setTitle("Digite os argumentos corretos!")
  .setColor("RANDOM")
  .setDescription(`Tem dificuldade nas contas de matemática?
Deixe a Isabela resolver para você!
Formas disponíves
+ = Adição
- = Subtração
x = Multiplicação
/ = Divisão
Como usar?
\`i!calc 1 + 1\`
\`i!calc 1 - 1\`
\`i!calc 5 x 5\`
\`i!calc 5 / 5\``)
  .setTimestamp()
  if (!args[0]) return message.reply(embedE)
  if (!args[1]) return message.reply(embedE)
  if (!args[2]) return message.reply(embedE)
  if (args[1] == "x") {
    let continha = args[0] * args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Multiplicação`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
  }
  if (args[1] == "+") {
    let continha = args[0] + args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Adição`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
  }
  if (args[1] == "-") {
    let continha = args[0] - args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Subtração`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
  }
  if (args[1] == "/") {
      let continha = args[0] / args[2]
    let embed = new Discord.MessageEmbed()
    .setTitle("Calculadora")
    .setColor("RANDOM")
    .addFields(
    {name: "Valor 1", value: `\`${args[0]}\``},
    {name: "Conta", value: "`Divisão`"},
    {name: "Valor 2", value: `\`${args[2]}\``},
    {name: "Resultado", value: `\`${continha}\``})
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
      }
  }
exports.help = {
  name: "i!vcalc"
}