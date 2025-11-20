const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  let embedE = new Discord.MessageEmbed()
  .setTitle("Minerador")
  .setColor("RANDOM")
  .setDescription(`Olá! Seja Bem Vindo ao **Painel de Mineração** da **Isabela!**

Aqui, onde você compra seu minerador, ou pega seu minerador inicial gratuito

para comprar um minerador (ou pegar gratuitamente) use \`i!minerador [LVL-DO-MINERADOR]\`

Não sabe como ganhar LvL´s? Execute o comando \`i!levels\`e e saiba mais!`)
  .addFields(
  {name: "Minerador Gratuito", value: `Valor: \`F$ 0\`
Gasolina Requirida: \`50 Litros\`
Requer Nível: \`0\`
Comando: \`i!minerador gratuito\``},
  {name: "Minerador LvL 1", value: `Valor: \`F$ 100\`
Gasolina Requirida: \`100 Litros\`
Requer Nível: \`5\`
Comando: \`i!minerador lvl1\``},
  {name: "Minerador LvL 2", value: `Valor: \`F$ 200\`
Gasolina Requirida: \`150 Litros\`
Requer Nível: \`10\`
Comando: \`i!minerador lvl2\``},
  {name: "Minerador LvL 3", value: `Valor: \`F$ 300\`
Gasolina Requirida: \`200 Litros\`
Requer Nível: \`15\`
Comando: \`i!minerador lvl3\``},
    {name: "Minerador LvL 4", value: `Valor: \`F$ 400\`
Gasolina Requirida: \`250 Litros\`
Requer Nível: \`20\`
Comando: \`i!minerador lvl4\``},
    {name: "Minerador LvL 5", value: `Valor: \`F$ 500\`
Gasolina Requirida: \`300 Litros\`
Requer Nível: \`25\`
Comando: \`i!minerador lvl5\``},
  )
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  if (!args[0]) return message.reply(embedE)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!minerador"
}